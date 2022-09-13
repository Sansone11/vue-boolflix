<template>
  <div class="container">
    <ul class="card">
      <li v-for="film in movies" :key="film.id">
        <h3>{{film.original_title}}</h3>
        <img :src="`${UriImg}${film.poster_path}`" alt="">
        <p>{{film.title}}</p>
        <p><img src="./it.png" alt=""></p>
        <p>{{roundedValue(film.vote_average)}}</p>
        <ul>
          <li v-for="star in roundedValue(film.vote_average) " :key="star">
            <font-awesome-icon icon="fa-solid fa-star" />
          </li>
          <li>
            <font-awesome-icon v-for="star in (5-roundedValue(film.vote_average))" :key="star + film.vote_average"
              icon="fa-regular fa-star" />
          </li>
        </ul>
      </li>
    </ul>
    <ul class="card">
      <li v-for="series in serie" :key="series.id">
        <h3>{{series.original_name}}</h3>
        <img :src="`${UriImg}${series.poster_path}`" alt="">
        <p>{{series.name}}</p>
        <p><img src="./it.png" alt=""></p>
        <p>{{roundedValue(series.vote_average)}}</p>
        <ul>
          <li v-for="star in roundedValue(series.vote_average)" :key="star">
            <font-awesome-icon icon="fa-solid fa-star" />
          </li>
          <li>
            <font-awesome-icon v-for="star in (5-roundedValue(series.vote_average))" :key="star + series.vote_average"
              icon="fa-regular fa-star" />
          </li>
        </ul>
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
  methods: {
    roundedValue(vote) {
      let realValue = Math.round(vote / 2)
      return realValue
    }
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>