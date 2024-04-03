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
  <input type="search" name="search_film" v-model="searchFilm">
  <button @click="$emit('search', this.searchFilm)">click me!</button>
</template>



<style lang="scss"></style>