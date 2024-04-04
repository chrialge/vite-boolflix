<script>
import axios from 'axios'
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';
import MainCard from './components/MainCard.vue';
import {state} from './state'

export default {
  name: app,
  data() {
    return {
      baseUrl: [],
      state,
    }
  },
  components: {
    HeaderApp,
    MainCard,
    FooterApp
  },
  methods: {
    search(searchFilm){
      const urlFilm = `${state.base_url_films}?api_key=${state.api_key}&language=it_IT&query=${searchFilm}`
      const urlSeries = `${state.base_url_series}?api_key=${state.api_key}&language=it_IT&query=${searchFilm}`
      this.baseUrl.push(urlFilm, urlSeries)
      for (let i = 0; i < this.baseUrl.length; i++) {
        const url = this.baseUrl[i];
        // console.log(url)
        this.state.callApi(url)
        
      };
      // console.log(this.state.arrayFilmsAndSeries)
    }
  },
  mounted() {
  }
}
</script>

<template>

  <HeaderApp @search="search" />
  <MainCard v-for="filmsAndSeries in state.arrayFilmsAndSeries" :filmsAndSeries="filmsAndSeries"/>

</template>

<style></style>
