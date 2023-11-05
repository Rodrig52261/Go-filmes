import React from 'react'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Link } from 'react-router-dom'

function Horror() {

    const [horror, setHorror] = useState([])

    const imagePath = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=91371e61d4e00e51c4a868909e4a3487`)
      .then(res => res.json())
      .then(horror => setHorror(horror.results))
    })

  return (
    <div>
      <h2>Horror</h2>
    <Swiper
    slidesPerView={4}
    pagination={{clickable: true }}
    navigation
    >  
      {horror.map(movie => {
        return(
          <SwiperSlide key={movie.id}>
            <div className="movie-horror">
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

export default Horror