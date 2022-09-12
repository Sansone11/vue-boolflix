<template>
  <div class="nav">
    <input class="search" type="text" v-model="query">
    <button @click="searchMovies">Search Movie</button>
    <div>
      <ul>
        <li v-for="film in movies" :key="film.id">
          <h3>{{film.original_title}}</h3>
          <p>{{film.title}}</p>
          <p><img src="./it.png" alt=""></p>
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
  data() {
    return {
      query: "",
    }
  },
  props: {
    film: Array,

  },
  methods: {
    searchMovies() {
      axios.get(`${state.baseUri}/search/movie?api_key=${state.apikey}&query=${this.query}&language=it-IT`)
        .then((res) => {
          state.movies = res.data.results
          console.log('movies:',state.movie)
        })
    },
  },
 
  computed: {
    movies() {
      return state.movies


    },

  },

}
console.log(state.movies)
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>