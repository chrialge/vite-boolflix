<script>
export default {
  name: 'HeaderApp',
  emits: ['search'],
  data() {
    return {
      searchFilm: '',
      display: false,
    }
  },
  mounted(){
  }
}
</script>

<template>
  <div id="site_header">
    <nav class="navbar">

      <!-- left navbar -->
      <div class="left">
        <img src="../../public/logo_b.jpg" alt="">
        <h1 class="font-black">BOOLFLIX</h1>

        <!--bottone che con il click cambia valore di display -->
        <button @click="display = !display">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
          
      </div>
      <!-- /left navbar -->

      <!-- right navbar -->
      <!-- viene aggiunta la classe display quando il valore e true -->
      <div class="right" :class="{'display': display == true}">
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