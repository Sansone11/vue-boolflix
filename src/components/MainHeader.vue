<template>
  <div class="nav">
    <input class="search" type="text">
    <button>Search Movie</button>
    <div>
      <ul>
        <!-- <li>{{state.original_title}}</li>
        <li>{{state.title}}</li>
        <li>{{state.original_lenguage}}</li>
        <li>{{state.vote}}</li> -->
      </ul>
    </div>

  </div>
</template>
  
<script>
import axios from 'axios';
import state from '../components/store';
export default {
  props: {
    msg: String
  },
  methods: {
    searchMovies() {
      axios.get('https://api.themoviedb.org/3/movie/157336?api_key=87f0771b157e9b64c497826e9e19fe61&query=Jack+Reacher')
        .then((res) => {
          // console.log(this.res.data)
          state.movies = res.data

        })
    },
  },
  created() {
    this.searchMovies()
    // console.log(this.searchMovies)
  },
  computed() {
    return state.movies
  },
}
console.log(state.data)
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>