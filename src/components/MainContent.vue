<template>
  <div class="container">
    <div class="card" v-for="film in movies" :key="film.id">
      <img :src="`${UriImg}${film.poster_path}`" alt="">
      <div class="overlay">
        <p>Titolo: {{film.title}}</p>
        <h3>Titolo originale: {{film.original_title}}</h3>
        <p>Lingua: <img src="./it.png" alt=""></p>
        <p class="vote_number">Voto: {{roundedValue(film.vote_average)}}</p>
        <ul class="vote">
          <li class="star" v-for="star in roundedValue(film.vote_average) " :key="star">
            <font-awesome-icon icon="fa-solid fa-star" />
          </li>
          <li>
            <font-awesome-icon class="star" v-for="star in (5-roundedValue(film.vote_average))"
              :key="star + film.vote_average" icon="fa-regular fa-star" />
          </li>
        </ul>
      </div>
    </div>
    <div class="card" v-for="series in serie" :key="series.id">
      <img :src="`${UriImg}${series.poster_path}`" alt="">
      <div class="overlay">
        <p>Titolo: {{series.name}}</p>
        <h3>Titolo originale: {{series.original_name}}</h3>
        <p>Lingua: <img src="./it.png" alt=""></p>
        <p class="vote_number">Voto: {{roundedValue(series.vote_average)}}</p>
        <ul class="vote">
          <li class="star" v-for="star in roundedValue(series.vote_average)" :key="star">
            <font-awesome-icon icon="fa-solid fa-star" />
          </li>
          <li>
            <font-awesome-icon class="star" v-for="star in (5-roundedValue(series.vote_average))"
              :key="star + series.vote_average" icon="fa-regular fa-star" />
          </li>
        </ul>
      </div>
    </div>
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

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.container {
  min-height: 800px;
  background-color: $-bg-main;
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);


  .star{
    color: $-star-color;
    text-align: center;
  }

  .card {
    position: relative;
    width: 342px;

  }

   .vote {
     display: flex;
     justify-content: center;
   }

  .vote_number {
    display: none;
  }

  .overlay {
    padding-top: 10rem;
    text-align: center;
    display: none;
    color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    width: 342px;
  }
  .card:hover .overlay {
    display: block;
  }
}
</style>