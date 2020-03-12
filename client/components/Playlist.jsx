import React, { Component } from 'react';
import Track from "./Track";
import Tuneables from './Tuneables';
import Spotify from 'spotify-web-api-js';


class Playlist extends Component {
 
  constructor (props) {
      super(props);
      this.state = {recommendations: []}; 
  }

  // Get recommendations
  getRecs() {
    // Set seed for the API call by getting 5 random track IDs from the playlist
    const seed = [];
    for (let i = 0; i < 5; i++) {
        const randIndex = Math.floor(Math.random() * this.props.tracks.length);
        seed.push(this.props.tracks[randIndex].id)
        console.log(this.props.tracks[randIndex].id)
    }
    // Pass the seed in as a parameter to our API call
    const spotifyApi = new Spotify();
    const params = {seed_tracks: seed};
    spotifyApi.getRecommendations(params)
    .then(result => {
        // Fill array of <Track> elements to render
        const recommendedTracks = result.tracks.map((track, i) => <Track key={i} track={track}/>);
        // Set state
        this.setState({ recommendations: recommendedTracks })
    })
    .catch(console.log('Error getting recommendations'))
  }

  render() {
    
    const { tracks } = this.props;
    // Array of <Tracks> to render for current playlist
    const trackList = [];
    for (let i = 0; i < tracks.length; i++) {
        trackList.push(<Track key={i} track={tracks[i]}  /> )
    }
        
    // if user hasn't gotten a playlist yet
    if (tracks.length === 0) {
      return (
        <div> Hello! </div>           
        )
    } else return (
        <div>
          <div> {this.props.name} </div>
            <Tuneables tracks={tracks} name={this.props.name} attributes={this.props.attributes}/> 
            <div> <button onClick={()=>this.getRecs()}> Refresh Recommendations </button> {this.state.recommendations} </div>
          <div> {trackList}  </div>
        </div>
    )
  }
   
}

export default Playlist;