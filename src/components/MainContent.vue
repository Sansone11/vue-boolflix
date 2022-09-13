<template>
  <div>
    <ul>
      <li v-for="film in movies" :key="film.id">
        <h3>{{film.original_title}}</h3>
        <img :src="`${UriImg}${film.poster_path}`" alt="">
        <p>{{film.title}}</p>
        <p><img src="./it.png" alt=""></p>
        <ul>
          <li v-for="n in roundedValue" :key="n">
            <font-awesome-icon icon="fa-solid fa-star" />
          </li>
        </ul>
        <p>{{roundedValue(film.vote_average)}}</p>
      </li>
    </ul>

    <ul>
      <li v-for="series in serie" :key="series.id">
        <h3>{{series.original_name}}</h3>
        <img :src="`${UriImg}${series.poster_path}`" alt="">
        <p>{{series.name}}</p>
        <p><img src="./it.png" alt=""></p>
        <ul>
          <li v-for="n in roundedValue" :key="n">
            <font-awesome-icon icon="fa-solid fa-star" />
          </li>
        </ul>
        <p>{{roundedValue(series.vote_average)}}</p>
      </li>
    </ul>

  </div>
</template>
  
<script>
import state from './store'
export default {
  computed: {
    movies() {
      return state.movies
    },
    serie() {
      return state.tv
    },
    UriImg() {
      return state.imgUri
    }
  },
  methods:{
    roundedValue(vote){
      return vote/2 
        
     }
  },
  voted (roundedValue){
    return Math.rounded(roundedValue)
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>