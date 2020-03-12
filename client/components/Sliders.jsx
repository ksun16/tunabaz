import React from 'react';

const Sliders = (props) => {
    return (
        <div> 
            <label htmlFor={'tempo'}>Tempo</label>
            <input type={'range'} id={'tempo'} name={'tempo'} defaultValue={null} onChange={()=>props.handleChange(event, `tempo`)} min={0} max={250} /> <br/>
            <label htmlFor={'danceability'}>Danceability</label>
            <input type={'range'} id={'danceability'} name={'danceability'} defaultValue={null} onChange={()=>props.handleChange(event, `danceability`)} min={0} max={100} /> <br/>
            <label htmlFor={'valence'}>Valence</label>
            <input type={'range'} id={'valence'} name={'valence'} defaultValue={null} onChange={()=>props.handleChange(event, `valence`)} min={0} max={100} /> <br/>
            <label htmlFor={'popularity'}>Popularity</label>
            <input type={'range'} id={'popularity'} name={'popularity'} defaultValue={null} onChange={()=>props.handleChange(event, `popularity`)} min={0} max={100} /> <br/>
            <label htmlFor={'energy'}>Energy</label>
            <input type={'range'} id={'energy'} name={'energy'} defaultValue={null} onChange={()=>props.handleChange(event, `energy`)} min={0} max={100} /> <br/>
            <label htmlFor={'acousticness'}>Acousticness</label>
            <input type={'range'} id={'acousticness'} name={'acousticness'} defaultValue={null} onChange={()=>props.handleChange(event, `acousticness`)} min={0} max={100} /> <br/>
            <label htmlFor={'instrumentalness'}>Instrumentalness</label>
            <input type={'range'} id={'instrumentalness'} name={'instrumentalness'} defaultValue={null} onChange={()=>props.handleChange(event, `instrumentalness`)} min={0} max={100} />
    
        </div>
    )
}
export default Sliders;

{/* <input type={'range'} id={'valence'} name={'valence'} min={0} max={100} />
<label for={'valence'}>Valence</label>
<input type={'range'} id={'popularity'} name={'popularity'} min={0} max={100} />
<label for={'Popularity'}>Popularity</label>
<input type={'range'} id={'energy'} name={'energy'} min={0} max={100} />
<label for={'energy'}>Energy</label>
<input type={'range'} id={'acoustiness'} name={'acousticness'} min={0} max={100} />
<label for={'acousticness'}>Acousticness</label>
<input type={'range'} id={'instrumentalness'} name={'instrumentalness'} min={0} max={10} />
<label for={'instrumentalness'}>Instrumentalness</label> */}