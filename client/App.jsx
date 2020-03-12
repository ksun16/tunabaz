import React, { Component} from "react";
//import "./App.css";
import Spotify from 'spotify-web-api-js';
import Tuneables from "./components/Tuneables";
import Playlist from "./components/Playlist";
import Track from "./components/Track";

const spotifyApi = new Spotify();

class App extends Component{
  constructor (){
      super();
      const params = this.getHashParams();
      this.state = {
          // is user logged in?
          loggedIn: params.access_token ? true : false,
          playlist: [],
          playlistID: '',
          name: '',
          attributes: {},
          token: params.access_token,
      }
      if (params.access_token) {
        spotifyApi.setAccessToken(params.access_token);
      }
      this.addSong = this.addSong.bind(this);
  }

// Gets access token
  getHashParams() {
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  getPlaylist() {
    spotifyApi.getUserPlaylists()  // note that we don't pass a user id
    .then(result => {
      // Set name and get playlist
      this.setState({name: result.items[0].name})
      this.setState({playlistID: result.items[0].id})
      spotifyApi.getPlaylistTracks(result.items[0].id)
      .then(result => {
        const playlist = result.items.map(el => el.track)
        this.setState({playlist: playlist}) ;
        // within this .then, the getAttributes method makes another API call
        this.getAttributes();       
      })
    })
    .catch((err) => console.error('Error getting playlists'));
  }

  getAttributes() {
    console.log('getting attributes in app')
    // Get trackIDs from playlist
    const trackIDs = this.state.playlist.map(track => track.id);
    const attributesObj = {
        acousticness: [],
        danceability: [],
        duration_ms: [],
        energy: [],
        instrumentalness: [],
        liveness: [],
        mode: [],
        popularity: [],
        speechiness: [],
        tempo: [],
        valence: []
    }
    // Fill popularity array
    attributesObj.popularity = this.state.playlist.map(track => track.popularity);
    // Make API call to get the other attributes
    spotifyApi.getAudioFeaturesForTracks(trackIDs)
    .then(result => {
      // Pushes the attributes of each track into corresponding array on the attributesObj
      // Outer loop loops through all the attributes (except popularity)
      Object.keys(attributesObj).forEach(key => {
       // Inner loop loops through all the tracks
        if(key != 'popularity') result.audio_features.forEach(el => attributesObj[key].push(el[key]));
      })    
      // Convert to arrays to means using forEach and reduce
      Object.keys(attributesObj).forEach(key => attributesObj[key] = attributesObj[key].reduce((a,b) => a + b) / this.state.playlist.length);
      // Set state
      this.setState({attributes: attributesObj});
    })
    .catch(err => console.err('Error getting audio attributes'))
  }
   
  addSong(trackURI) {
    console.log(this.state.playlistID)
    spotifyApi.addTracksToPlaylist(this.state.playlistID, trackURI)
    .then(this.getPlaylist());
  }

  render() {
    return(
      <div className="App">
        <h1> :) </h1>
        <h2><strong> {this.state.name} </strong></h2>
        <a href='http://localhost:8888'>
            <button>Login with Spotify</button>
        </a>
        <button onClick={() => this.getPlaylist()}>
          Get Playlist
        </button>
        <Playlist tracks={this.state.playlist} name={this.state.name} attributes={this.state.attributes} token={this.state.token} addSong={this.addSong}/>
      </div>
    );
  }
}



export default App;





// nowPlaying: {
//   name: 'Not Checked',
//   image: ''
// },

// getNowPlaying() {
//   spotifyApi.getMyCurrentPlaybackState()
//     .then((response) => {
//      //console.log(response.item.album.images[0])
//      console.log('hello')
//      const currImage = response.item.album.images[0].url;
//      const currSong = response.item.name;
//      console.log(currImage, currSong);
//       this.setState({
//         nowPlaying: {
//           name: currSong,
//           image: currImage
//         }
//       });
//     });
// }



// <div> Now Playing: { this.state.nowPlaying.name }</div>
// <img src={ this.state.nowPlaying.image} style={ {width: 100}} />
// <button onClick={() => this.getNowPlaying()}>
//   Get Now Playing
// </button>