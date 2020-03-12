import React, { Component } from 'react';
import Track from "./Track";
import Tuneables from './Tuneables';
import Recommendations from './Recommendations';


class Playlist extends Component {
    
  render() {
    
    const { tracks } = this.props;
    // song array
    // const trackList = tracks.map((song, i) => {
    //     // const artists = song.artists.map(artist => artist.name)
    //     // const image = song.album.images[0].url;
    //     // console.log(song)
    //     // console.log('name' + song.name)
    //     // console.log('artists' + artists)
    //     // console.log('image' + image)
    //     console.log(song)
    //     return <Track key={i} track={song}  /> 
    // })
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
            <div> <button> Refresh Recommendations </button> <Recommendations tracks={tracks} attributes={this.props.attributes} token={this.props.token}/> </div>
          <div> {trackList}  </div>
        </div>
    )
  }
   
}

export default Playlist;