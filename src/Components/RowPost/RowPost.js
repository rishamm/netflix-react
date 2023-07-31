import React,{useState, useEffect} from 'react'
import "./RowPost.css"
import {imageUrl,API_KEY} from "../../constants/constants"
import axios from '../../axios'
import YouTube from 'react-youtube'

function RowPost(props) {
   const [movies, setMovies] = useState([])
   const [urlid, setUrlid] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data)
            setMovies(response.data.results)
        })   
    },[props.url])
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    
    const handleMovie=(id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then ((response)=>{
            if(response.data.results.length !==0){
                setUrlid(response.data.results[0])
            }
            else {
                console.log("array is empty")
            }
         
        })   
    }
  return (
    <div className='row'>
        <h2 style={{marginTop:22}}>{props.title}</h2>
        <div className="posters">
        {movies.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)} src={`${imageUrl+obj.backdrop_path}`} className={props.isSmall ? "smallPoster" :"poster"} alt='Cardimage' />
            )}
 
        </div>
       {urlid && <YouTube videoId={urlid.key} opts={opts}/>}
    </div>
  )
}

export default RowPost