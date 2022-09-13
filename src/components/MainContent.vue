<template>
  <div class="container">
    <ul class="card">
      <li v-for="film in movies" :key="film.id">
        <img :src="`${UriImg}${film.poster_path}`" alt="">
        <p>Titolo: {{film.title}}</p>
        <h3>Titolo originale: {{film.original_title}}</h3>
        <p><img src="./it.png" alt=""></p>
        <p>Voto: {{roundedValue(film.vote_average)}}</p>
        <ul class="vote">
          <li class="star" v-for="star in roundedValue(film.vote_average) " :key="star">
            <font-awesome-icon icon="fa-solid fa-star" />
          </li>
          <li>
            <font-awesome-icon class="star" v-for="star in (5-roundedValue(film.vote_average))" :key="star + film.vote_average"
              icon="fa-regular fa-star" />
          </li>
        </ul>
      </li>
    </ul>
    <ul class="card">
      <li v-for="series in serie" :key="series.id">
        <img :src="`${UriImg}${series.poster_path}`" alt="">
        <p>Titolo: {{series.name}}</p>
        <h3>Titolo originale: {{series.original_name}}</h3>
        <p><img src="./it.png" alt=""></p>
        <p>Voto: {{roundedValue(series.vote_average)}}</p>
        <ul class="vote">
          <li class="star" v-for="star in roundedValue(series.vote_average)" :key="star">
            <font-awesome-icon icon="fa-solid fa-star" />
          </li>
          <li>
            <font-awesome-icon class="star" v-for="star in (5-roundedValue(series.vote_average))" :key="star + series.vote_average" icon="fa-regular fa-star" />
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
  @import '../assets/style.scss';
  ul,li{
    list-style: none;
  }
  .container{
    width: 100%;
    background-color:$-bg-main;
    .card{
      display: grid;
      grid-template-columns: repeat(4,1fr);
    }
    h3,p{
      color: white;
    }
    .star{
      color:$-star-color;
    }
    .vote{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
      }
  }

</style>