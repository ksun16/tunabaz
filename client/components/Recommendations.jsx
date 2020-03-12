import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js';
// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
// const useInput = init => {
//     const [ value, setValue ] = useState(init);
//     const onChange = e => {
//       setValue(e.target.value);
//     }
//     // return the value with the onChange function instead of setValue function
//     return [ value, onChange ];
//   }
const spotifyApi = new Spotify();

const Recommendations = (props) => {
    // item = items[Math.floor(Math.random()*items.length)];
  const { tracks } = props;
  // Seed array will have up to five random track IDs
  const seed = [];
  for (let i = 0; i < 5; i++) {
      const randIndex = Math.floor(Math.random() * tracks.length);
      seed.push(tracks[randIndex].id)
      console.log(tracks[randIndex].id)
  }
  console.log(tracks)
  console.log(seed)
  const params = {seed_tracks: seed};
  
  spotifyApi.getRecommendations(params)
  .then(result => {
   //console.log(result.tracks)
   const recommendedTracks = result.tracks.map(track => track.name)
   console.log(recommendedTracks)
  })
  .catch(console.log('Error getting recommendations'))

  
  return (
      <div> PLACEHOLDER </div>
  )
}
// class Recommendations extends Component {
//     item = items[Math.floor(Math.random()*items.length)];


export default Recommendations;