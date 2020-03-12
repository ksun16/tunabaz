import React from 'react';

const Track = (props) => {
    const { track } = props
    const artists = track.artists.map(artist => artist.name)
    const image = track.album.images[0].url;
    return (
    <div> 
        <img src={image} width={50} onClick={() => props.addSong([track.uri])}/>
        {track.name} by {artists} 
    </div>
    )
}

export default Track;