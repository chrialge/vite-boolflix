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
                this.result = resp.data.results;
                for (let i = 0; i < this.result.length; i++) {
                    const filmAndSerie = this.result[i];
                    this.arrayFilmsAndSeries.push(filmAndSerie)
                }
                
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            });
    }

})