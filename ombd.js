
// var liriInput = require("./liri.js");

// console.log(liriInput)

var axios = require("axios");

// Then run a request with axios to the OMDB API with the movie specified
var movieName = process.argv[2];

axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
  function(response) {

    console.log("Title of Movie: " + response.data.Title);
    console.log("Year Movie was Released: " + response.data.Year);
    console.log("IMBD Rating: " + response.data.imdbRating);
    console.log("Rotten Tomatos Rating: " + response.data.Ratings[1].Value);
    console.log("County Movie was Produced in: " + response.data.Country);
    console.log("Language of Movie: " + response.data.Language);
    console.log("Plot of Movie: " + response.data.Plot);
    console.log("Main Actors in Movie: " + response.data.Actors);
  }

);