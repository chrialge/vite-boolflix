<script>
import axios from 'axios'
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/FooterApp.vue';

export default {
  name: app,
  data() {
    return {
      filmsAndSeries: [],
      baseUrl: [
        'https://api.themoviedb.org/3/search/movie?api_key=479d4aba08723532f8e6643920017729&query=',
        'https://api.themoviedb.org/3/search/tv?api_key=479d4aba08723532f8e6643920017729&language=it_IT&query='
      ],
      arrayFilmsAndSeries: [],
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
          console.log(resp.data);
          this.filmsAndSeries = resp.data.results;
          if(this.arrayFilmsAndSeries.length < 2){
            this.arrayFilmsAndSeries.push(this.filmsAndSeries);
          }else{
            this.arrayFilmsAndSeries = []
            this.arrayFilmsAndSeries.push(this.filmsAndSeries);
          }

        });
    },
    search(searchFilm) {
      console.log(searchFilm)
      for (let i = 0; i < this.baseUrl.length; i++) {
        const url = this.baseUrl[i];
        console.log(url);
        this.callApi(url + searchFilm);
      };
        
      
      
      console.log(this.arrayFilms);
    }
  },
  mounted() {
  }
}
</script>

<template>

  <HeaderApp @search="search" />
  <MainApp v-for="filmsAndSeries in arrayFilmsAndSeries" :filmsAndSeries="filmsAndSeries"/>

</template>

<style></style>
