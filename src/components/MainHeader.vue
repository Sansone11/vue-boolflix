<template>
  <div class="nav">
    <input class="search" type="text">
    <button @click="searchMovies">Search Movie</button>
    <div>
      <ul>
        <li v-for="film in movies" :key="film.id" >
        <h3>{{film.original_title}}</h3>
        <p>{{film.title}}</p>
        <p>{{film.original_language}}</p>
        <p>{{film.vote_average}}</p>
      </li>  
      </ul>
    </div>

  </div>
</template>
  
<script>
import axios from 'axios';
import state from '../components/store';
export default {
  props: {
    film: Array,
    
  },
  methods: {
    searchMovies() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=87f0771b157e9b64c497826e9e19fe61&query=pippo')
        .then((res) => {
          console.log(res.data)
          state.movies = res.data.results

        })
    },
  },
  created() {
    this.searchMovies()
  },
  computed: {
    movies(){
      return state.movies
        
      
    }
  },
}
console.log(state.movies)
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>