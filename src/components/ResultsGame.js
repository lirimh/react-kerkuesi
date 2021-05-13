import React from 'react'

const ResultsGame = (props) =>{
    return(
        <div className="results">
                {
                    props.gameResults.map(game => (
                        <div className="result" key={game.id} >
                            	<a 	href={game.reddit_url} 
				target="_blank" 
				rel="noreferrer">
                            <img src={game.background_image} alt="game" />
                                <h3>{game.name}</h3>
                                </a>
                        </div>
                    ))
                }
        </div>
    )
}
export default ResultsGame;