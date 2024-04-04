<script>
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/FooterApp.vue';
import {state} from './state'

export default {
  name: app,
  data() {
    return {
      baseUrl: [],
      state,
      array: []
    }
  },
  components: {
    HeaderApp,
    MainApp,
    FooterApp
  },
  methods: {
    search(searchFilm){
      this.state.arrayFilmsAndSeries = []
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
    this.newArray
  }
}
</script>

<template>

  <HeaderApp @search="search" />
  <MainApp :arrayFilmsAndSeries="state.arrayFilmsAndSeries"/>

</template>

<style></style>
