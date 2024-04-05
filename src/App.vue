<script>
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/FooterApp.vue';
import { state } from './state'

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
    MainApp,
    FooterApp
  },
  methods: {
    search(searchFilm) {

      // constante dell'url del film
      const urlFilm = `${state.base_url_films}?api_key=${state.api_key}&language=it_IT&query=${searchFilm}`
      // constante dell'url del telefilm
      const urlSeries = `${state.base_url_series}?api_key=${state.api_key}&language=it_IT&query=${searchFilm}`
      
      // 
      this.baseUrl = []
      // inserisco i due url in un array
      this.baseUrl.push(urlFilm, urlSeries)

      // svuto l'array prima della ricerca
      this.state.arrayFilmsAndSeries = []
      // console.log(this.state.arrayFilmsAndSeries)

      // ciclo che itera per ogni url
      for (let i = 0; i < this.baseUrl.length; i++) {
        // constante che prende gli url singolarmente
        const url = this.baseUrl[i];
        // console.log(url)

        // invoco della funzione e gli passo come parametro l'url
        this.state.callApi(url);
      };

      // console per vedere cosa ce nell'array
      console.log(this.state.arrayFilmsAndSeries);
    }
  },
  mounted() {
  }
}
</script>

<template>

  <!-- componente header che emette un evento search-->
  <HeaderApp @search="search" />

  <!-- componente dove gli passiamo il risultato della funzione search-->
  <MainApp :arrayFilmsAndSeries="state.arrayFilmsAndSeries" />

</template>

<style></style>
