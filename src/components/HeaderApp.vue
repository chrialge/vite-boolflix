<script>
export default {
  name: 'HeaderApp',
  emits: ['search'],

  data() {
    return {
      searchFilm: '',
      display: false,
      show: false,
      genersFilter: [],
      type: '',
    }
  },
  mounted() {
    console.log(this.genersFilter)
  }
}
</script>

<template>
  <div id="site_header">
    <nav class="navbar">

      <!-- left navbar -->
      <div class="left">
        <h1 class="font-black">BOOLFLIX</h1>

        <!--bottone che con il click cambia valore di display -->
        <button @click="display = !display">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>

      </div>
      <!-- /left navbar -->

      <!-- right navbar -->
      <!-- viene aggiunta la classe display quando il valore e true -->
      <div class="right" :class="{ 'display': display == true }">

        <!-- input che prende tutto quello che gli inseriamo e lo mette dentro searchFilm -->
        <input type="search" name="search_film" v-model="searchFilm">

        <!-- bottone che cliccano cambiano il valore di show -->
        <button @click="show = !show">Filter</button>

        <!-- se il valore dello show e true si mostra -->
        <div class="container_filter" v-show="show">
          <!-- <div>{{ genersFilter }}</div> -->

          <!-- div per scegliere il tipo di filtraggio -->
          <div class="select">
            <input type="radio" id="hidden" value="Hidden" v-model="type" required />
            <label for="hidden">Hidden</label>

            <input type="radio" id="filter" value="Filter" v-model="type" required />
            <label for="filter">Filter</label>
          </div>

          <!-- 28 = 10759 -->
          <input type="checkbox" id="action" value="28" v-model="genersFilter">
          <label for="action">Action</label>

          <input type="checkbox" id="adventure" value="12" v-model="genersFilter">
          <label for="adventure">Adventure</label>

          <input type="checkbox" id="animation" value="16" v-model="genersFilter">
          <label for="animation">Animation</label>

          <input type="checkbox" id="comedy" value="35" v-model="genersFilter">
          <label for="comedy">Comedy</label>

          <input type="checkbox" id="crime" value="80" v-model="genersFilter">
          <label for="crime">Crime</label>

          <input type="checkbox" id="documentary" value="99" v-model="genersFilter">
          <label for="documentary">Documentary</label>

          <input type="checkbox" id="drama" value="18" v-model="genersFilter">
          <label for="drama">Drama</label>

          <input type="checkbox" id="family" value="10751" v-model="genersFilter">
          <label for="family">Family</label>

          <input type="checkbox" id="kids" value="10762" v-model="genersFilter">
          <label for="kids">Kids</label>

          <input type="checkbox" id="mystery" value="9648" v-model="genersFilter">
          <label for="mystery">Mystery</label>

          <input type="checkbox" id="news" value="10763" v-model="genersFilter">
          <label for="news">News</label>

          <input type="checkbox" id="reality" value="10764" v-model="genersFilter">
          <label for="reality">Reality</label>

          <!-- 14 -->
          <input type="checkbox" id="sci-fi&fantasy" value="10765" v-model="genersFilter">
          <label for="sci-fi&fabtasy">Sci-fi & Fantasy</label>

          <input type="checkbox" id="soap" value="10766" v-model="genersFilter">
          <label for="soap">Soap</label>

          <input type="checkbox" id="talk" value="10767" v-model="genersFilter">
          <label for="talk">Talk</label>

          <!-- 10752 -->
          <input type="checkbox" id="war&politics" value="10768" v-model="genersFilter">
          <label for="war&politics">War & Politics</label>

          <input type="checkbox" id="western" value="37" v-model="genersFilter">
          <label for="western">Western</label>

          <input type="checkbox" id="history" value="36" v-model="genersFilter">
          <label for="history">History</label>

          <input type="checkbox" id="horror" value="27" v-model="genersFilter">
          <label for="horror">Horror</label>

          <input type="checkbox" id="music" value="10402" v-model="genersFilter">
          <label for="music">Music</label>

          <input type="checkbox" id="romance" value="10749" v-model="genersFilter">
          <label for="romance">Romance</label>

          <input type="checkbox" id="sciencefiction" value="878" v-model="genersFilter">
          <label for="sciencefitcion">Science Fitcion</label>

          <input type="checkbox" id="tvmovie" value="10770" v-model="genersFilter">
          <label for="tvmovie">TV Movie</label>

          <input type="checkbox" id="thriller" value="53" v-model="genersFilter">
          <label for="thriller">thriller</label>
        </div>
        <!-- bottone che quando clicco emette un evento ad app.vue con il valore di searchFilm, i valori dei generi di filtraggio, il tipo filtraggio, poi con il click ogni volta che faccio search libera l'array dei generi -->
        <button class="font-bold"
          @click="$emit('search', this.searchFilm, this.genersFilter, this.type), this.genersFilter = []">SEARCH</button>
      </div>
      <!-- /right navbar -->

    </nav>
  </div>

</template>



<style lang="scss"></style>