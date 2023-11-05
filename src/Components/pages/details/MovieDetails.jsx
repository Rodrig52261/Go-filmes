import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './details.css'

function MovieDetails() {

    const { id } = useParams()

    const imagePath = 'https://image.tmdb.org/t/p/w500/'

    const [ details, setDetails ] = useState ([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=91371e61d4e00e51c4a868909e4a3487`)
        .then(res => res.json())
        .then(data => {
            const {title, poster_path, release_date, overview} = data
            const details = {
              id,
              title,
              image: `${imagePath}${poster_path}`,
              sinopse: overview,
              releaseDate: release_date
            }
            setDetails(details)
        })
    }, [id])

  return (
    <div>
       <div className="">
        <div className="conteudo-details">
          <h3>{details.title}</h3>
          <img src={details.image} alt="" />
        
          <div className="conteudo-sinopse">
            <br/>
            <span>{details.sinopse}</span>
          <div className="">
            <br/>
            <span>{details.releaseDate}</span>
          </div>
          <div className="">
            <br/>
            <Link to='/'><button>Voltar</button></Link>
          </div>
        </div>    
        </div>
       </div>
    </div>
  )
}


export default MovieDetails