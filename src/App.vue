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
    search(searchFilm, geners, type) {

      // constante dell'url del film
      const urlFilm = `${state.base_url_films}?api_key=${state.api_key}&language=it_IT&query=${searchFilm}`
      // constante dell'url del telefilm
      const urlSeries = `${state.base_url_series}?api_key=${state.api_key}&language=it_IT&query=${searchFilm}`
      
      // svuota l'array dove contiene gli url
      this.baseUrl = []
      // inserisco i due url in un array
      this.baseUrl.push(urlFilm, urlSeries)

      // svuto l'array prima della ricerca
      this.state.arrayFilmsAndSeries = []
      // console.log(this.state.arrayFilmsAndSeries)

      // condizioni per includere altri id che si assomigliano
      if(geners.includes('28')){
        geners.push('10759')
      }else if(geners.includes('12')){
        geners.push('10759')
      }else if(geners.includes('10765')){
        geners.push('14')
      }else if(geners.includes('10768')){
        geners.push('10752')
      }

      console.log(geners, type)
      // ciclo che itera per ogni url
      for (let i = 0; i < this.baseUrl.length; i++) {
        // constante che prende gli url singolarmente
        const url = this.baseUrl[i];
        // console.log(url)

        // invoco della funzione e gli passo come parametro l'url, i generi di filtraggio e il tipo di filtraggio
        this.state.callApi(url, geners, type);
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
