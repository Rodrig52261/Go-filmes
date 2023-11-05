import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import 'swiper/css'
import Movieacao from './Components/pages/Movieacao'
import Movieromance from './Components/pages/romance/Movieromance'
import Horror from './Components/pages/horror/Horror'

function App() {

    const [movie, setMovie] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() =>{
      fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=91371e61d4e00e51c4a868909e4a3487`)
      .then(res => res.json())
      .then(data => console.log(data))
    }, [])


  return (
    <>
      <Header />
      <div className="">
          <Movieromance />
      <div className="">  
        <hr />
      <h2>Ação</h2>
          
      <div/> 
          
      </div>
        <Movieacao />
      </div>  
      <hr />
      <div className="">
        <Horror />
      </div>
    </>
  )
}

export default App
