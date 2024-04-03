<script>
import axios from 'axios'
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/FooterApp.vue';

export default {
  name: app,
  data() {
    return {
      films: [],
    }
  },
  components: {
    HeaderApp,
    MainApp,
    FooterApp
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(resp => {
          this.films = resp.data.results
        })
    },
    search(searchFilm, url) {
      console.log(searchFilm)
      this.callApi(url + searchFilm)
      console.log(this.films)
    }
  },
  mounted() {

  }
}
</script>

<template>

  <HeaderApp @search="search" />
  <MainApp v-for="film in films" :title="film.title" :titleOriginal="film.original_title" :vote="film.vote_average" :language="film.original_language"/>
  
</template>

<style></style>
