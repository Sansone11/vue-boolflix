
import Vue from 'vue'


const state = Vue.observable({
    movies: [],
    tv:[],
    apikey:'87f0771b157e9b64c497826e9e19fe61',
    query:'',
    baseUri:'https://api.themoviedb.org/3',
    imgUri:'https://image.tmdb.org/t/p/w300/',
    posterPath:[]

    
});




export default state;
