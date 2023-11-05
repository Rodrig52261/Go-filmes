import React from 'react'
import { useState, useEffect } from 'react' 
import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import '../Style.css'
import 'swiper/css'

function Movieromance() {

    const [romance, setRomance] = useState([])
    const imagePath = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=10749&api_key=91371e61d4e00e51c4a868909e4a3487`)
        .then(res => res.json())
        .then(romance => setRomance(romance.results))
    })


  return (
    <div>
      <h2>Romance</h2>
       <Swiper
        slidesPerView={4}
        pagination={{clickable: true }}
        navigation
        >  
      {romance.map(movie  => {
        return(
          <SwiperSlide>
            <div className="movie-romance" key={movie.id}>
              <Link to={`/MovieDetails/${movie.id}`}><img src={`${imagePath}${movie.poster_path}`} alt={movie.title} /></Link>
            <div className="">
                <span>{movie.title}</span>
            </div>
            </div>  
          </SwiperSlide>   
        )
      })}
        </Swiper> 
    </div>
  )
}

export default Movieromance