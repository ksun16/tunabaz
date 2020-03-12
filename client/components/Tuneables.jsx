import React, { Component } from 'react';

const Tuneables = (props) => {
    const { attributes } = props;
    return(
        <div> 
            <ul >
                 <li>Tempo: {Number.parseFloat(attributes.tempo).toFixed() + ' BPM'}</li>
                 <li>Danceability: {Number.parseFloat(attributes.danceability).toFixed(2) * 100}</li>
                 <li>Valence: {Number.parseFloat(attributes.valence).toFixed(2) * 100}</li>
                 <li>Popularity: {Number.parseFloat(attributes.popularity).toFixed()}</li>
                 <li>Energy: {Number.parseFloat(attributes.energy).toFixed(2) * 100}</li>
            </ul>
        </div>
    )
}

export default Tuneables;