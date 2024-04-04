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
                if (this.arrayFilmsAndSeries.length < 2) {
                    // console.log(this.result)
                    this.arrayFilmsAndSeries.push(this.result);
                } else {
                    this.arrayFilmsAndSeries = [];
                    this.arrayFilmsAndSeries.push(this.result);
                }
                
            })
            .catch(err => {
                // console.log(err);
                // console.log(err.message);
            });
    }

})