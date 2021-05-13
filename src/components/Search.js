import React from 'react'
import Logo from '../assets/img/big-logo.svg'

function Search({ handleInput,searchMovie }) {
    return (
        <section className="searchbox-wrap">
             <h2 className="movie-search">Filma</h2>
             <img className="big-logo" src={Logo}></img>
            <input 
                type="text"
                placeholder="Kerko nje film..." 
                className="searchbox" 
                onChange={handleInput} 
                onKeyPress={searchMovie}>
            </input>
        </section>
    )
}

export default Search
