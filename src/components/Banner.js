import React,{ useState, useEffect } from 'react'
import axios from '../axios.js'
import requests from '../requests.js'
import '../Banner.css';
const Banner = () => {

    const [movies,setMovies]= useState([]);


    function truncate(str, n){
        return (str?.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
      };
    useEffect(() => {
      const fetchMovie = async()=>{
          const request = await axios.get(requests.fetchNetflixOriginals)
          setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
          
          return request;
      }
      fetchMovie()
      console.log(movies);
    }, [])

    
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundPosition: "center center",   

        }}> 
        <div className="banner__content">

            {/* Backround Image */}

            {/* title */}
            <h1 className="banner_title">
                {movies?.title || movies?.name || movies?.original_name}
            </h1>
            <div className="banner__buttons">
                <button className="banner__button" >Play</button><button className="banner__button">Watchlist</button>
            </div>
            {/* div containing button */}

            {/* descri-ption */}
            <h1 className="banner__description">{truncate(movies?.overview, 150)}</h1>
            <div className="banner--fadeBottom"></div>
            
        </div>
        </header>
    )
}

export default Banner
