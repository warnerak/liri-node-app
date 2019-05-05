# LIRI Bot

**Overview**
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

**Packages**
Node-Spotify-API - API used for searching song data
Axios - Used this technology to access the Bands-in-Town API and the OMBD API
Moment - Used the technology to convert the time format
DotEnv - Used to store the Spotify keys/secret

**TO START**
DotEnv and Key Files
You will need to generate your own .env and keys.js files to store your spotify key information.

Code the following inside keys.js:

console.log('this is loaded');

exports.spotify = {
id: process.env.SPOTIFY_ID,
secret: process.env.SPOTIFY_SECRET
};

Code the following inside .env:
(note: you will need to replace your-spotify-id and your-spotify-secret with your generated ID and secret from the spotify developer API)

**Spotify API keys**

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

**Using LIRI**

To use LIRI you must enter in one of the four commands:

1. concert-this command:
   Enter in your terminal: node liri.js concert-this <artist/band name>.
   This will search the Bands-in-Town API and return the following infomation:

- Name of the venue
- Venue location
- Date of the Event ("MM/DD/YYYY")

- If there isn't any upcoming events for the given artist, an error message will show.

<img src="https://github.com/warnerak/liri-node-app/blob/master/images/LIRI_ConcertThis.PNG" />

2. spotify-this-song command:
   Enter in your terminal: node liri.js spotify-this-song '<song title>'.
   This will search the Spotify Node API and return the following infomation:

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from

Note: if no song is provided then your program will default to "The Sign" by Ace of Base.

<img src="https://github.com/warnerak/liri-node-app/blob/master/images/LIRI_SpotifyThisSong.PNG" />

3. movie-this command:
   Enter in your terminal: node liri.js movie-this '<movie title>'
   This will search the OMBD API and return the following infomation:

- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Rotten Tomatoes Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.

\*If the user doesn't select a movie, LIRI will show details for "Mr. Nobody!"

<img src="https://github.com/warnerak/liri-node-app/blob/master/images/LIRI_MovieThis.PNG" />

4. do-what-it-says command
   node liri.js do-what-it-says This command will use the fs Node package to read a random.txt file to call one of LIRI's commands

- Log File
  All commands sent to LIRI will be logged in the log.txt file. You can see past search responses along with any errors encountered in this file

<img src="https://github.com/warnerak/liri-node-app/blob/master/images/LIRI_DoWhatItSays.PNG" />

Functionality
See the full functionality here: ![movie!](https://raw.githubusercontent.com/kenzrad/liri-node-app/master/screen-prints/functionality.mov)
