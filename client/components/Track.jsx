import React from 'react';

const Track = (props) => {
    console.log(props.track)
    const { track } = props
    const artists = track.artists.map(artist => artist.name)
    const image = track.album.images[0].url;
    return (
    <div> 
        <img src={image} width={50}/>
        {track.name} {artists} 
    </div>
    )
}

export default Track;