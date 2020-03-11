import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js';

const spotifyApi = new Spotify();

const attributes = [
  acousticness, 
  danceability,
  duration,
  energy,
  instrumentalist,
  liveness,
  mode,
  popularity,
  speechiness,
  tempo,
  valence
]


class Tuneables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acousticness:0,
            danceability: 0,
            duration: 0,
            duration: 0,
            energy: 0,
            instrumentalist: 0,
            liveness: 0,
            mode: 0,
            popularity: 0,
            speechiness: 0,
            tempo: 0,
            valence: 0,
         
        }
    }
    render() {
        //console.log(this.props.tracks)
        return (
            <div> {this.props.name} </div>
        )
    }


}

export default Tuneables;