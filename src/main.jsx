import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { register } from 'swiper/element/bundle'

register();
import 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import MovieDetails from './Components/pages/details/MovieDetails.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }></Route>
        <Route path="/MovieDetails/:id" element={ <MovieDetails/> }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
