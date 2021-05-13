import React from 'react'

const Popup = ({selected,closePopup}) => {
    return (
     <section className="popup">
         <div className="content">
         <button className="close" onClick={closePopup}>Back</button>
            <h2>{selected.Title } <span>({selected.Year})</span></h2>
            <p className="rating">Rating: {selected.imdbRating}</p>
            <div className="plot">
                <img src={selected.Poster} alt=""></img>
                <p>{selected.Plot}</p>
            </div>
         </div>
     </section>
    )
}

export default Popup
