<script>
import axios from 'axios'

export default {
  name: app,
  data() {
    return {
      searchFilm: '',
      films: [],
      baseUrl: 'https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=',
      languages: ''
    }
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(resp => {
          this.films = resp.data.results
        })
    },
    search() {
      console.log(this.searchFilm)
      this.callApi(this.baseUrl + this.searchFilm)
      console.log(this.films)
    }
  },
  mounted() {
    
  }
}
</script>

<template>
  <header>
    <input type="search" name="search_film" v-model="searchFilm">
    <button @click="search">click me!</button>
  </header>
  <main>
    <ul v-for="film in films">
      <li>{{ film.title }}</li>
      <li>{{ film.original_title }}</li>
      <li><img :src="'https://flagcdn.com/16x12/' + film.original_language + '.png' " alt="">{{ film.original_language }} </li>
      <li>{{ film.vote_average }}</li>
    </ul>
  </main>
</template>

<style></style>
