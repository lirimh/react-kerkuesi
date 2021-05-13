import React from 'react'

function AnimeCard({anime}) {
	return (
		<div className="result">
			<a 	href={anime.url} 
				target="_blank" 
				rel="noreferrer">
			<img src={anime.image_url} alt="" />
			<h3>{anime.title}</h3>
			</a>
		</div>
	)
}


export default AnimeCard
