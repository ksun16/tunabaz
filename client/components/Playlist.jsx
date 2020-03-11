import React, { Component } from 'react';
import Track from "./Track";


class Playlist extends Component {
    
  render() {
    const { tracks } = this.props;
    console.log(tracks)
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
  
    
    return (
      <div> {trackList}  </div>
    )
  }
   
}

export default Playlist;