// //Inquirer NPM for Prompting
// require("dotenv").config();
// var inquirer = require('inquirer');
// var axios = require("axios");
// var keys = require("./keys.js");
// var Spotify = require('node-spotify-api');
// var spotify = new Spotify(keys.spotify);
// var moment = require('moment');



// if (process.argv[2] === 'concert-this'){
// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "Please enter in the name of the band you would like to search:",
//       name: "bandname"
//     },
//     {
//       type: "confirm",
//       message: "Are you sure:",
//       name: "confirm",
//       default: true
//     }
//   ])


//     .then(function(inquirerResponse) {
//       console.log(inquirerResponse.bandname);
//       if (inquirerResponse.confirm) {
//         console.log("Information for " + inquirerResponse.bandname + " is posted below.");
//         var band = inquirerResponse.bandname;
//         axios.get("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp").then(
//           function (response) {
//             response.data.forEach(concert => {
//               console.log(concert.venue.name)
//               console.log(concert.venue.city + ", " + concert.venue.region)
//               console.log(moment(concert.datetime).format("MM/DD/YYYY")
//               console.log("---------------------------")
//             })
//           }
//         );
//       }
//       else {
//         console.log("I'm sorry, please come again.");
//       }

//     });

//   }    

//   else if (process.argv[2] === 'spotify-this-song'){
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "Please enter in the name of the song you would like to search:",
//         name: "songname"
//       },
//       {
//         type: "confirm",
//         message: "Are you sure:",
//         name: "confirm",
//         default: true
//       }

//     ])



//       .then(function(inquirerResponse) {
//         if (inquirerResponse.confirm) {
//           console.log("Information for " + inquirerResponse.songname + " is posted below.");
//           var song = inquirerResponse.songname;
//           spotify.search({ type: 'track', query: song }, function(err, data) {
//               if (err) {
//                 return console.log('Error occurred: ' + err);}
                              
//                 console.log("Track Name: " + responseText(data.tracks.item[0].name));
//                 console.log("Artist Name: " + responseText(data.tracks.item[0].artist[0].name));
//                 console.log("Album: " + responseText(data.tracks.item[0].album.name));
//                 console.log("Preview Link: " + response.Text(data.tracks.items[0].href));
                  
              
            
//           //   console.log(data); 
//             });
          
//         }
//         else {
//           console.log("I'm sorry, please come again.");
//         }

//       });

//     }    

//     else if (process.argv[2] === 'movie-this'){
//     inquirer
//       .prompt([
//         // Here we create a basic text prompt.
//         {
//           type: "input",
//           message: "Please enter in the name of the movie you would like to search:",
//           name: "moviename"
//         },

//         //Confirm name of band
//         {
//           type: "confirm",
//           message: "Are you sure:",
//           name: "confirm",
//           default: true
//         }
//       ])


//         .then(function(inquirerResponse) {
//           if (inquirerResponse.confirm) {
//             console.log("Information for " + inquirerResponse.moviename + " is posted below:");
//             var movieName = inquirerResponse.moviename;
//             axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
//               function(response) {

//                 console.log("Title of Movie: " + response.data.Title);
//                 console.log("Year Movie was Released: " + response.data.Year);
//                 console.log("IMBD Rating: " + response.data.imdbRating);
//                 console.log("Rotten Tomatos Rating: " + response.data.Ratings[1].Value);
//                 console.log("County Movie was Produced in: " + response.data.Country);
//                 console.log("Language of Movie: " + response.data.Language);
//                 console.log("Plot of Movie: " + response.data.Plot);
//                 console.log("Main Actors in Movie: " + response.data.Actors);
//               }

//             );
//           }
//           else {
//             console.log("I'm sorry, please come again.");
//           }

//         });

        

//       }    

      



