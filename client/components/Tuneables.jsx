import React, { Component } from 'react';

const Tuneables = (props) => {
    const { attributes } = props;
    return(
        <div> 
            <ul >
                 <li>tempo: {attributes.tempo}</li>
                 <li>danceability: {attributes.danceability}</li>
                 <li>popularity: {attributes.popularity}</li>
                 <li>duration: {attributes.duration}</li>
                 <li>energy: {attributes.energy}</li>
            </ul>
        </div>
    )
}
//import Spotify from 'spotify-web-api-js';

//const spotifyApi = new Spotify();

//   const { tracks } = props


// let danceability;
// spotifyApi.getAudioFeaturesForTrack(tracks[0].id)
// .then(result => {
//     console.log(result)
//     danceability = result
// })
// .catch(err => console.err(':('))
// console.log(danceability)

// class Tuneables extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         acousticness:0,
//         danceability: 0,
//         duration: 0,
//         energy: 0,
//         instrumentalness: 0,
//         liveness: 0,
//         mode: 0,
//         popularity: 0,
//         speechiness: 0,
//         tempo: 0,
//         valence: 0,
//         name: ''
//     }
//     this.getAttributes();
//   }
  
//   componentDidUpdate() {
//     // Avoid infinite loop!
//     console.log(this.state.name, this.props.name)
//     console.log(this.state)
//     if(this.state.name != this.props.name) this.getAttributes();
//   }

//   getAttributes() {
//     console.log('getting attributes')
//     const name = this.props.name;
//     // Get trackIDs
//     const trackIDs = this.props.tracks.map(track => track.id);
//     const attributesObj = {
//         acousticness: [],
//         danceability: [],
//         duration_ms: [],
//         energy: [],
//         instrumentalness: [],
//         liveness: [],
//         mode: [],
//         popularity: [],
//         speechiness: [],
//         tempo: [],
//         valence: []
//     }
//     console.log(attributesObj)
//     // Fill popularity array
//     attributesObj.popularity = this.props.tracks.map(track => track.popularity);
//     // Make API call to get the other attributes
//     spotifyApi.getAudioFeaturesForTracks(trackIDs)
//     .then(result => {
//       // Pushes the attributes of each track into corresponding array on the attributesObj
//       // Outer loop loops through all the attributes (except popularity)
//       Object.keys(attributesObj).forEach(key => {
//        // Inner loop loops through all the tracks
//         if(key != 'popularity') result.audio_features.forEach(el => attributesObj[key].push(el[key]));
//       })    
//       // Convert to arrays to means using forEach and reduce
//       Object.keys(attributesObj).forEach(key => attributesObj[key] = attributesObj[key].reduce((a,b) => a + b) / this.props.tracks.length);
//       // Set state w/ conditional to avoid inf loop
    
//       this.setState({
//         acousticness: attributesObj.acousticness,
//         danceability: attributesObj.danceability,
//         duration: attributesObj.duration_ms,
//         energy: attributesObj.energy,
//         instrumentalness: attributesObj.instrumentalness,
//         liveness: attributesObj.liveness,
//         mode: attributesObj.mode,
//         popularity: attributesObj.popularity,
//         speechiness: attributesObj.speechiness,
//         tempo: attributesObj.tempo,
//         valence: attributesObj.valence,
//         name: name
//       })
      
      
//     })
//     .catch(err => console.err('Error getting audio attributes'))
//   }
  

//   render() {
//    // console.log(this.props.tracks[0])
//     //console.log(this.state.danceability)
//     return (
//         <div> 
//             <ul >
//                 <li>tempo: {this.state.tempo}</li>
//                 <li>danceability: {this.state.danceability}</li>
//                 <li>popularity: {this.state.popularity}</li>
//                 <li>duration: {this.state.duration}</li>
//                 <li>energy: {this.state.energy}</li>
//             </ul>

//             {/* <ul >
//                   <li>tempo: {this.state.tempo}</li>
//                   <li>danceability: {this.state.danceability}</li>
//                   <li>popularity: {this.state.popularity}</li>
//                   <li>duration: {this.state.duration}</li>
//                   <li>energy: {this.state.energy}</li>
//               </ul> */}
//       </div>



//     )
//   }
// }
// // }

export default Tuneables;