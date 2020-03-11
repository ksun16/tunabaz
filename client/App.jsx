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
          name: ''
      }
      if (params.access_token) {
        spotifyApi.setAccessToken(params.access_token);
    
      }
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
      this.setState({name: result.items[0].name})
      spotifyApi.getPlaylistTracks(result.items[0].id)
      .then(result => {
        const playlist = result.items.map(el => el.track)
        this.setState({playlist})
      })
    })
    .catch((err) => console.error('Error getting playlists'));
  }


  render() {
    return(
      <div className="App">
        <h1> :) </h1>
        <a href='http://localhost:8888'>
            <button>Login with Spotify</button>
        </a>
        <button onClick={() => this.getPlaylist()}>
          Get Playlist
        </button>
        <Tuneables tracks={this.state.playlist} name={this.state.name}/>
        <Playlist tracks={this.state.playlist}/>
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