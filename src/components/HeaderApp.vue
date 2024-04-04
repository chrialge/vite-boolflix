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
      <div class="left">
        <h1 class="font-black">BOOLFLIX</h1>
      </div>
      <div class="right">
        <input type="search" name="search_film" v-model="searchFilm">
        <button class="font-bold" @click="$emit('search', this.searchFilm)">SEARCH</button>
      </div>
    </nav>
  </div>

</template>



<style lang="scss"></style>