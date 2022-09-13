<template>
  <div class="nav">
    <h1>Boolflix</h1>
    <input class="search" type="text" v-model="query" placeholder="Cosa vuoi guardare...?">
    <button @click="searchAll">Search Movie</button>
  </div>
</template>
  
<script>
import axios from 'axios';
import state from '../components/store';
export default {
  data() {
    return {
      query: "",


    }
  },

  methods: {
    searchMovies() {
      axios.get(`${state.baseUri}/search/movie?api_key=${state.apikey}&query=${this.query}&language=it-IT`)
        .then((res) => {
          state.movies = res.data.results
          console.log('movies:', state.movie)
        })
    },

    searchTv() {
      axios.get(`${state.baseUri}/search/tv?api_key=${state.apikey}&query=${this.query}&language=it-IT`)
        .then((res) => {
          state.tv = res.data.results
          console.log('series:', state.tv)
        })
    },

    searchAll() {
      this.searchTv()
      this.searchMovies()

    },
    
  },

  
 
  
}
console.log(state.imgUri)
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>