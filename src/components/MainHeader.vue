<template>
  <div class="nav">
    <div class="title">
      <h1>Boolflix</h1>
    </div>
    <div class="option">
      <input class="search" type="text" v-model="query" placeholder="Inserisci un Titolo">
      <button @click="searchAll">Inizia ricerca</button>
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
  
};
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/style.scss';
  .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:$-bg-navbar-bg;
    padding: 0px 3rem;
    h1{
      color:$-color-write;
      font-size: 40px;
    }
    input,
    button{
      background-color: white;
      border: none;
      height: 30px;
      
    }
    button{
      font-weight: bold;
    }
    .input{
      font-size: 13px;
      font-weight: bold;
    }
    .option{
      display: flex;
      gap: 2rem;
    }
  }
  

</style>