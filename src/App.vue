<script>
export default{
  name: app,
  data(){
    return{
      searchFilm: 'cf',
    }
  },
  methods:{
    search(){
      console.log(this.searchFilm)
    }
  },
  mounted(){
    console.log(this.searchFilm)
    console.log('ciao')
  }
}
</script>

<template>
  <header>
    <input type="search" name="search_film" id="" v-model="searchFilm" @keyup="search">
    <button>click me!</button>
  </header>
</template>

<style>

</style>
