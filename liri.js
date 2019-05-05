//Inquirer NPM for Prompting
require('dotenv').config();
var fs = require('file-system');
var axios = require('axios');
var keys = require('./keys.js');
var moment = require('moment');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

switch (command) {
    case "concert-this":
    concertCommand(userInput);
    break;

    case "movie-this":
    movieCommand(userInput);
    break;

    case "spotify-this-song":
    songCommand(userInput);
    break;

    case "do-what-it-says":
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return console.log(err);
        }
        else{
            data = data.split(",");
            var command = data[0];
            var query = data[1];
            if (command === "spotify-this-song"){
                dataTest = true;
                songCommand(query);
            }
            console.log(data)
            } 
        }) 
    break;   
}


//concert-this function.

function concertCommand(band) {
    axios
      .get(
        'https://rest.bandsintown.com/artists/' + band + '/events?app_id=codingbootcamp'
      )
      .then(function(response) {
        response.data.forEach(concert => {
          console.log(concert.venue.name);
          console.log(concert.venue.city + ', ' + concert.venue.region);
          console.log(moment(concert.datetime.slice(0, 10), 'YYYY-MM-DD').format("MM/DD/YYYY"));
          console.log('---------------------------');
        });
      });
 
};


//movie-this command.
function movieCommand(movieName){
    axios
        .get('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=trilogy')
            .then(function(response) {
              console.log('Title of Movie: ' + response.data.Title);
              console.log('Year Movie was Released: ' + response.data.Year);
              console.log('IMBD Rating: ' + response.data.imdbRating);
              console.log('Rotten Tomatos Rating: ' + response.data.Ratings[1].Value);
              console.log('County Movie was Produced in: ' + response.data.Country);
              console.log('Language of Movie: ' + response.data.Language);
              console.log('Plot of Movie: ' + response.data.Plot);
              console.log('Main Actors in Movie: ' + response.data.Actors);
            });
       
            };
        
  //spotify-this-song-command.

  function songCommand(song) {

  spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log("Track Name: " + data.tracks.items[0].name);
    console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
    console.log("Album: " + data.tracks.items[0].album.name);
    console.log("Preview Link: " + data.tracks.items[0].href);
    // console.log(data);
  })
  }