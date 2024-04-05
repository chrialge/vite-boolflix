<script>
export default {
  name: 'HeaderApp',
  emits: ['search'],
  data() {
    return {
      searchFilm: '',
    }
  }
}
</script>

<template>
  <div id="site_header">
    <nav class="navbar">

      <!-- left navbar -->
      <div class="left">
        <h1 class="font-black">BOOLFLIX</h1>
      </div>
      <!-- /left navbar -->

      <!-- right navbar -->
      <div class="right">
        <!-- input che prende tutto quello che gli inseriamo e lo mette dentro searchFilm -->
        <input type="search" name="search_film" v-model="searchFilm">
        <!-- bottone che quando clicco emette un evento ad app.vue con il valore di searchFilm -->
        <button class="font-bold" @click="$emit('search', this.searchFilm)">SEARCH</button>
      </div>
      <!-- /right navbar -->

    </nav>
  </div>

</template>



<style lang="scss"></style>