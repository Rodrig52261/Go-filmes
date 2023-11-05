import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Header() {
  return (
    <div className="cabecalho">
        <h1>Go filmes</h1>
        <div className="busca">
            <input type="text" placeholder='Buscar Filme' />
            <button type='submit'><FaSearch/></button>
        </div>
    </div>
  )
}

export default Header
