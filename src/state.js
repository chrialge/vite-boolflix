import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    //https://api.themoviedb.org/3/movie/42423/credits?language=en-US&api_key=e99307154c6dfb0b4750f6603256716\
    // 'https://api.themoviedb.org/3/tv/38368/credits?language=en-US'
    base_url_genrs_list_movie: 'https://api.themoviedb.org/3/genre/movie/list?language=en',
    base_url_genrs_list_serie: 'https://api.themoviedb.org/3/genre/tv/list?language=en',
    base_url_cast_series: 'https://api.themoviedb.org/3/tv',
    base_url_cast_movie: 'https://api.themoviedb.org/3/movie',
    base_url_films: 'https://api.themoviedb.org/3/search/movie',
    base_url_series: 'https://api.themoviedb.org/3/search/tv',
    api_key: '479d4aba08723532f8e6643920017729',
    result: [],
    arrayFilmsAndSeries: [],
    cast: [],

    callApi(url) {
        axios
            .get(url)
            .then(resp => {
                // console.log(resp.data.results);

                // prende i dati dall'url api in un unico array
                this.result = resp.data.results;

                // ciclo che fa iterai per ogni oggetto dell array 
                for (let i = 0; i < this.result.length; i++) {

                    // costante che prende il singolo oggetto
                    const filmAndSerie = this.result[i];
                    /* invovko la funzione e gli passo id di ogni film/serie, la funzione che mitrova se e un film o una serie, e l'oggetto*/
                   this.fetchType(filmAndSerie.id, this.movieORSeries(filmAndSerie), filmAndSerie)
                    // inserisce ogni oggetto nell array 
                    this.arrayFilmsAndSeries.push(filmAndSerie);
                };
            })
            .catch(err => {
                // console che ci dice quale errore ce
                console.log(err);
                // console che ci da il numero dell'errore
                console.log(err.message);
            });
    },

    /**
     * funzione che in base se ho un film o serie crea un url diverso e richiama la funzione fetchCast
     * @param {number} id il numero id per trovare i membri che hanno fatto il film
     * @param {string} type se un film o una serie
     * @param {object} file oggetto in cui inseriamo il cast
     */
    fetchType(id, type, file){
        // se e un film
        if(type === 'movie'){
            // url er trovare le credenziali del film
            const url = `${this.base_url_cast_movie}/${id}/credits?language=en-US&api_key=${this.api_key}`
            // invoko la funzione e gli passo url e l'oggetto
            this.fetchCast(url, file)

            const urlGenrsList = `${this.base_url_genrs_list_movie}&api_key=${this.api_key}`
            console.log(urlGenrsList)
            this.fetchGeners(urlGenrsList, file)
        }//altimenti
        else{
            //url per trovare le credenziali del telefilm
            const url = `${this.base_url_cast_series}/${id}/credits?language=en-US&api_key=${this.api_key}`
            // invoko la funzione e gli passo url e l'oggetto
            this.fetchCast(url, file)

            const urlGenrsList = `${this.base_url_genrs_list_serie}&api_key=${this.api_key}`
            console.log(urlGenrsList)

            this.fetchGeners(urlGenrsList, file)
        }
    },

    /**
     * funzione in cui prende i primi 5 attori e li inserisce nell'oggetto
     * @param {URL} url link dell'api per prendere le persone che hanno lavorato per realizzare il film/serie
     * @param {object} file oggetto che puo essere film/serie
     */
    fetchCast(url, file) {
        axios
            .get(url)
            .then(resp => {
                // prende i risultati
                const result = resp.data.cast
                // svuota l'istanza per ogni chiamata
                this.cast = []
                // itera per prendere i primi 5 attori
                for (let i = 0; i < 5; i++) {
                    // prende la singola persona
                    const person = result[i];
                    // se non ce informazioni
                    if (person == undefined) {
                        // se non ha gia inserito un dato in cast
                        if(this.cast.length < 1){
                            // inserisci questa stringa 
                          this.cast.push("i don't have info for actor")  
                        }
                    } //altrimenti 
                    else {
                        // costante che prende solo il nome dell'attore
                      const actor = person.name  
                        //inserisce ogni nome nell'array cast   
                      this.cast.push(actor)
                    }
                }
                // viene creata una nuova proprieta per ogni film/serie dove inseriamo l'istanza del cast 
                file.cast = this.cast
            })
    },
    fetchGeners(url, file) {
        axios.get(url)
            .then(resp => {
                const genreList = resp.data.genres
                const ids = file.genre_ids
                const geners = []
                // console.log(genreList, id)
                // console.log(genreList)
                if (ids.length == 0) {
                    geners.push("I don't have info for geners")
                } else {
                    for (let i = 0; i < genreList.length; i++) {
                        const genre = genreList[i];
                        // console.log(genre)
                        for (let i = 0; i < ids.length; i++) {
                            const id = ids[i];
                            // console.log(id)
                            if (genre.id === id) {
                                // console.log(genre.id, id, genre.name)
                                // console.log('ciao')
                                geners.push(genre.name)

                            }
                        }
                    }


                }
                file.geners = geners
            })
    },

    /**
     * funzione che li suddivide in base a un dato specifico
     * @param {object} type oggetto che puo essere film o serie 
     * @returns la tipologia delll'oggetto film o serie
     */
    movieORSeries(type) {
        // se hanno sto valore 
        if (type.original_title) {
            // costante che prende la stringa 'movie'
            const typology = 'movie';

            type.type = typology
            // console.log(type);
            return typology;
        } //altrimenti
        else {
            // constante che prende la stringa 'serie tv'
            const typology = 'serie tv'

            type.type = typology
            // console.log(type);
            return typology;
        }

    },

})