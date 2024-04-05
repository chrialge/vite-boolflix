import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    //https://api.themoviedb.org/3/movie/42423/credits?language=en-US&api_key=e99307154c6dfb0b4750f6603256716
    base_url_cast: 'https://api.themoviedb.org/3/movie',
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

    fetchCast(url) {
        axios
            .get(url)
            .then(resp => {
                // console.log(resp.data.cast)
                const result = resp.data.cast
                this.cast = []
                console.log(result)
                if (result.name === undefined) {
                    this.cast.push("I haven't information for actor")
                } else {
                    for (let i = 0; i < 5; i++) {
                        const actor = result[i].name;

                        this.cast.push(actor)
                    }
                }

                console.log(this.cast)
            })
    }

})