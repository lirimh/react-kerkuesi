import React from 'react'
import Logo from '../assets/img/big-logo.svg'
const SearchGame = ({searchTerm,onSubmit,handleChange})=> {
    return (
        <section className="searchbox-wrap">
        <h2 className="game-search">VideoLojera</h2>
        <img className="big-logo" src={Logo}></img>
        <form onSubmit={onSubmit}>
        <input type="text"
        placeholder="Kerko nje loje..." 
        className="searchbox"  
        value={searchTerm} 
        onChange={handleChange}/>
        </form>
        </section>
    )
}

export default SearchGame


             
        