

let myApp = new Vue({
  el:"#root",
  data:{

    API_KEY: "112af51c0e7271e4d4b8c857cffac064",
    movies: [],
    search: "",
  },

  methods:{

    mounted: function(){
      axios.get("https://api.themoviedb.org/3/search/movie",{
        params:{
          'api_key':this.API_KEY,
          'query':this.query
        }
      })
      .then((result)=> {
        console.log(this.movies)
        this.movies = result.data.results
      });
    }






 },

});
