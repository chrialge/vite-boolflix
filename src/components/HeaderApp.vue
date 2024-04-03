<script>
export default {
  name: 'HeaderApp',
  emits: ['search'],
  data() {
    return {
      searchFilm: '',
      baseUrl: 'https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=',
    }
  }
}
</script>

<template>
  <input type="search" name="search_film" v-model="searchFilm">
  <button @click="$emit('search', this.searchFilm, this.baseUrl)">click me!</button>
</template>



<style lang="scss"></style>