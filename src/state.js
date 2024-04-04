import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    base_url_films: 'https://api.themoviedb.org/3/search/movie?api_key=479d4aba08723532f8e6643920017729&query=Mat',
    api_key: 'api_key=479d4aba08723532f8e6643920017729&language=it_IT&query=',
    result: [],

    callApi() {
        axios.get(base_url_films)
            .then(resp => {
                console.log(resp.data)
            })
            .catch(err => [
                console.log(err),
                console.log(err.message)
            ])
    }

})