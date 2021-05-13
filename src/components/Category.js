import React from 'react'
import GamingIcon from '../assets/img/gaming-icon.svg'
import AnimeIcon from '../assets/img/anime-icon.svg'
import MovieIcon from '../assets/img/movie-icon.svg'
import GameingIconHover from '../assets/img/gaming-icon-hover.svg'
import AnimeIconHover from '../assets/img/anime-icon-hover.svg'
import MovieIconHover from '../assets/img/movie-icon-hover.svg'

import { CATEGORIES } from '../App'
import HoverImage from "react-hover-image";

const Category = ({ onCategoryChanged }) =>{
    return(
        <div className="category">
        <h3>Kategoritë</h3>
        <div className="gaming-icon">
          <HoverImage
            src={GamingIcon}
            hoverSrc={GameingIconHover}
            onClick={() => onCategoryChanged(CATEGORIES.GAME)}
          />
        </div>
        <div className="anime-icon">
        <HoverImage
            src={AnimeIcon}
            hoverSrc={AnimeIconHover}
            onClick={() => onCategoryChanged(CATEGORIES.ANIME)}
          />
        </div>
        <div className="movie-icon">
        <HoverImage
            src={MovieIcon}
            hoverSrc={MovieIconHover}
            onClick={() => onCategoryChanged(CATEGORIES.MOVIE)}
          />
          </div>
        </div>


      
      
    )
}

export default Category;