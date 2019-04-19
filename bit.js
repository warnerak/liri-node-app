//Bands in Town API
//Command: concert-this
var axios = require("axios");
//Load the NPM Package Bands in Town
var artist = process.argv[2]
// var artist = inquirerResponse.bandname;
console.log(artist)


axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
   function (response) {

     response.data.forEach(concert => {
       console.log(concert.venue.name)
       console.log(concert.venue.city + ", " + concert.venue.region)
       console.log(concert.datetime)
       console.log("---------------------------")
     })
   }
 );