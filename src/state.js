import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    base_url_films: 'https://api.themoviedb.org/3/search/movie',
    base_url_series: 'https://api.themoviedb.org/3/search/tv',
    api_key: '479d4aba08723532f8e6643920017729',
    result: [],
    arrayFilmsAndSeries: [],

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
    }

})