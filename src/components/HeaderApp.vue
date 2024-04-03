<script>
export default {
  name: 'HeaderApp',
  emits: ['search'],
  data() {
    return {
      searchFilm: '',
      baseUrl: 'https://api.themoviedb.org/3/search/movie?api_key=479d4aba08723532f8e6643920017729&query=',
      baseUrlTeleFilm: 'https://api.themoviedb.org/3/search/tv?api_key=479d4aba08723532f8e6643920017729&language=it_IT&query='
    }
  }
}
</script>

<template>
  <input type="search" name="search_film" v-model="searchFilm">
  <button @click="$emit('search', this.searchFilm, [this.baseUrl, this.baseUrlTeleFilm])">click me!</button>
</template>



<style lang="scss"></style>