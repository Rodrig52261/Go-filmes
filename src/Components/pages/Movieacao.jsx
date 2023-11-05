import React from 'react'
import { useState, useEffect } from 'react' 
import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Style.css'
import 'swiper/css'


import { register } from 'swiper/element/bundle'
register()

function Movieacao() {

    const [acao, setAcao] = useState ([])

    const imagePath = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=91371e61d4e00e51c4a868909e4a3487`)
      .then(res => res.json())
      .then(acao => setAcao(acao.results))
    })

  return (
    <div className='movie-conteudo'>
      <Swiper 
      slidesPerView={4}
      pagination={{clickable: true }}
      navigation
      >
      {acao.map(movie => {
        return(
          <SwiperSlide key={movie.id}> 
            <div className="movie-acao">
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

export default Movieacao
