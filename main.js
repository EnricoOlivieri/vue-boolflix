

let myApp = new Vue({
  el: "#root",
  data: {

    API_KEY:"0774404865d5eefe2c0cc58b6059c67d",
    movies: [],
    currentMoviesPage: 1,
    currentSeriesPage: 1,
    series: [],
    query: "",
  },

  watch:{
    currentMoviesPage: function(){
      axios.get("https://api.themoviedb.org/3/search/movie",{
        params:{
          'api_key': this.API_KEY,
          'query': this.query,
          'page': this.currentMoviesPage,
        }
      })
      .then((result)=> {

        this.movies = result.data.results
        console.log(this.movies)
      });
    },

    currentSeriesPage: function(){
      axios.get("https://api.themoviedb.org/3/search/tv",{
        params:{
          'api_key': this.API_KEY,
          'query': this.query,
          'page': this.currentSeriesPage,
        }
      })
      .then((result) => {

        this.series = result.data.results
        console.log(this.series)
      });
    },
  },

  methods: {
    getResult: function(){
      this.currentMoviesPage = 1;
      axios.get("https://api.themoviedb.org/3/search/movie",{
        params: {
          'api_key': this.API_KEY,
          'query': this.query,
          'page': 1,
        }
      })
      .then((result)=> {

        this.movies = result.data.results
        console.log(this.movies)

      });

      axios.get("https://api.themoviedb.org/3/search/tv",{
        params:{
          'api_key': this.API_KEY,
          'query': this.query,
          'page': 1,
        }
      })
      .then((result)=> {
        this.series = result.data.results
        console.log(this.series)
      });
    },

    getImage: function(testo){
      return "https://image.tmdb.org/t/p/w342/" + testo
    },

    starWidth: function(num){
      return {width: (num*10) +'%'};
    },

    getFlag: function(langAbb){
      let langObj = languageArray.find(function(element){
        return element.abbreviation.includes(langAbb)
      });
      if (langObj){
        return langObj.flag
      }else{
        return "🏳️‍🌈"
      }
    },

    nextMoviesPage: function(){
      this.currentMoviesPage++;
      document.getElementById('movies-ul').scrollLeft = 0;
    },

    previousMoviesPage: function(){
      this.currentMoviesPage--;
    },

    nextSeriesPage: function(){
      this.currentSeriesPage++;
      document.getElementById('series-ul').scrollLeft = 0;
    },

    previousSeriesPage: function(){
      this.currentSeriesPage--;
    },
  },
});


var languageArray=[

  {
    language:"english",
    flag: "🇬🇧",
    abbreviation:"eng"
  },
  {
    language:"italian",
    flag: "🇮🇹",
    abbreviation:"it"
  },
  {
    language:"french",
    flag: "🇫🇷",
    abbreviation:"fr"
  },
  {
    language:"portuguese",
    flag: "🇵🇹",
    abbreviation:"pr"
  },
  {
    language:"russian",
    flag: "🇷🇺",
    abbreviation:"rus"
  },
  {
    language:"espanol",
    flag: "🇪🇸 ",
    abbreviation:"es"
  },
  {
    language:"japanese",
    flag: "🇯🇵",
    abbreviation:"ja"
  },
  {
    language:"Korean",
    flag: "🇰🇷 ",
    abbreviation:"ko"
  },
  {
    language:"chinese",
    flag: "🇨🇳",
    abbreviation:"zh"
  },
  {
    language:"polish",
    flag: "🇵🇱",
    abbreviation:"pl"
  },
  {
    language:"deutsch",
    flag: "🇩🇪",
    abbreviation:"de"
  },
  {
    language:"nepal",
    flag: "🇳🇵",
    abbreviation:"kn"
  },
]
