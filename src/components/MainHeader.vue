<template>
  <div class="nav">
    <input class="search" type="text">

  </div>
</template>
  
<script>
import axios from 'axios';
export default {
  data(){
    return{
      movieList: [],
      
    }
  },
  props: {
    msg: String
  },
  methods: {
    searchMovies() {
      axios.get('https://api.themoviedb.org/3/movie/157336?api_key=87f0771b157e9b64c497826e9e19fe61&query=Jack+Reacher')
      .then((res) => {
        console.log(res.data)
        this.movieList = res.data.response
      })
    },
  },
  created() {
    this.searchMovies()
    console.log(this.searchMusic)
  },


}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>