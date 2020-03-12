import React, { Component } from 'react';
import Track from "./Track";
import Tuneables from './Tuneables';
import Spotify from 'spotify-web-api-js';
import Sliders from './Sliders'


class Playlist extends Component {
 
  constructor (props) {
      super(props);
      this.state = {recommendations: [],
        sliders: {
            tempo: null,
            danceability: null,
            valence: null,
            popularity: null,
            energy: null,
            acousticness: null,
            instrumentalness: null
        }}; 
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, attr) {
    const newSliders = Object.assign(this.state.sliders, this.state.sliders[attr] = event.target.value)
    this.setState({sliders: newSliders})
    console.log(this.state)
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
    const params = {
        seed_tracks: seed,
        target_tempo: this.state.sliders.tempo,
        target_danceability: this.state.sliders.danceability,
        target_valence: this.state.sliders.valence,
        target_popularity: this.state.sliders.popularity,
        target_energy: this.state.sliders.energy,
        target_acousticness: this.state.sliders.acousticness,
        target_instrumentalness: this.state.sliders.instrumentalness
    };
    // Only want keys that aren't null
    const validParams = Object.keys(params)
        .filter(key => params[key] != null)
        .reduce((obj, key) => {
            obj[key] = params[key];
            return obj;
          }, {});
    spotifyApi.getRecommendations(validParams)
    .then(result => {
        // Fill array of <Track> elements to render
        const recommendedTracks = result.tracks.map((track, i) => <Track key={i} track={track}  addSong={this.props.addSong}/>);
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
        trackList.push(<Track key={i} track={tracks[i]} /> )
    }
        
    // if user hasn't gotten a playlist yet
    if (tracks.length === 0) {
      return (
        <div> Hello! </div>           
        )
    } else return (
        <div id="playlist">
          <div id="tracks"> <strong>Stats</strong>
            <Tuneables tracks={tracks} name={this.props.name} attributes={this.props.attributes}/> 
            <div> <strong>Tracks</strong> {trackList}  </div>
          </div>
          <div id="recs"> <strong>Recommended Tracks</strong>
            <Sliders attributes={this.props.attributes} handleChange={this.handleChange} sliders={this.state.sliders}/>
            <div> <button onClick={()=>this.getRecs()}> Refresh Recommendations </button> {this.state.recommendations} </div>
          </div>
           
        </div>
    )
  }
   
}

export default Playlist;

{/* <div> 
<input type={'range'} id={'tempo'} name={'tempo'} min={0} max={250} />
<label for={'tempo'}>Tempo</label>
<input type={'range'} id={'danceability'} name={'danceability'} min={0} max={100} />
<label for={'danceability'}>Danceability</label>
<input type={'range'} id={'valence'} name={'valence'} min={0} max={100} />
<label for={'valence'}>Valence</label>
<input type={'range'} id={'popularity'} name={'popularity'} min={0} max={100} />
<label for={'Popularity'}>Popularity</label>
<input type={'range'} id={'energy'} name={'energy'} min={0} max={100} />
<label for={'energy'}>Energy</label>
<input type={'range'} id={'acoustiness'} name={'acousticness'} min={0} max={100} />
<label for={'acousticness'}>Acousticness</label>
<input type={'range'} id={'instrumentalness'} name={'instrumentalness'} min={0} max={10} />
<label for={'instrumentalness'}>Instrumentalness</label>
</div> */}