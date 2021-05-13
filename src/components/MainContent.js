import React from 'react'
import Logo from '../assets/img/big-logo.svg';
import AnimeCard from './AnimeCard'

function MainContent(props) {
	return (
		<section className="searchbox-wrap">
			<div className="main-head">
			<h2 className="anime-search">Filma te animuar</h2>
             <img className="big-logo" src={Logo}></img>
				<form 
					className="search-box"
					onSubmit={props.HandleSearch}
					>
					<input 
						type="search"
						className="searchbox"
						placeholder="Kerko nje filme te animuar..."
						required
						value={props.search}
						onChange={e => props.SetSearch(e.target.value)}/>
				</form>
			</div>
			
			<section className="results">
				{props.animeList.map(anime => (
					<AnimeCard
						className="result"
						anime={anime}
						key={anime.mal_id} />
				))}
			</section>
		</section>
	)
}



export default MainContent
