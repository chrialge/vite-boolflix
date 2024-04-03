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
          console.log(resp.data)
          this.films = resp.data.results
        })
    },
    search(searchFilm, url) {
      console.log(searchFilm)
      console.log(url)
      for (let i = 0; i < url.length; i++) {
        const element = url[i]
        console.log(element)
        this.callApi(element + searchFilm)
      }
      
      console.log(this.films)
    }
  },
  mounted() {
    for (let i = 0; i < 2; i++) {
      
    }
  }
}
</script>

<template>

  <HeaderApp @search="search" />
  <MainApp v-for="film in films" :title="film.title" :titleOriginal="[film.original_title, film.original_name]" :vote="film.vote_average" :language="film.original_language"/>

</template>

<style></style>
