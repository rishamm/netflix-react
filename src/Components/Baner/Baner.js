
import { useEffect, useState } from "react"
import axios from "../../axios"
import {API_KEY,imageUrl} from '../../constants/constants'
import "./Baner.css"

function Baner() {
    const [movie, setMovie] = useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then ((response)=>{
            console.log(response.data.results[0])
            let x = Math.floor((Math.random() * 20) + 1);
            setMovie(response.data.results[x])
        })   
    },[])
  return (
    <div
    style={{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`}} className='baner'>
        <div className='container'>
            <h1 className='titles'  style={{marginBottom:15}}>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'> My  List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade-bottom"></div>
    </div>
  )
}

export default Baner