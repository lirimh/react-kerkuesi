import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Search from './components/Search'
import Category from './components/Category'
import Results from './components/Results'
import ResultsGame from './components/ResultsGame'
import Popup from './components/Popup'
import MainContent from './components/MainContent';
import SearchGame from './components/SearchGame'

import './App.css'

export const CATEGORIES = {
  ANIME: "https://api.jikan.moe/v3",
  GAME: "https://api.rawg.io/api/games?key=bc7fbf442aeb479fba1585272b81a9bd",
  MOVIE: "http://www.omdbapi.com/?apikey=dfe6d885"
};

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])
  const [animeList, SetAnimeList] = useState([]);
	const [search, SetSearch] = useState("");
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
    selectedCategory: CATEGORIES.MOVIE,
  });

   // Category change function
  const handleChangeCategory = (category) => {
    console.log("Changing selected category to: ", category);
    setState(prevState => {
      return { ...prevState, selectedCategory: category }
    })
  }
  //Game Search function
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])
    fetch(`https://api.rawg.io/api/games?search=${slug}&key=bc7fbf442aeb479fba1585272b81a9bd`)
    .then(resp => resp.json())
    .then(({results}) => {
      results === undefined ? alert('no games found') : setGameResults(results)
    })
    setSearchTerm("")
  }

  // Movie search function
  const searchMovie = (e) => {
    if (e.key === "Enter") {
      axios(state.selectedCategory + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(state.selectedCategory + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

// Anime Search function
	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());

		SetAnimeList(temp.results);
	}

	useEffect(() => {
	
  }, []);
  

  return (
    <div className="App">
      <main>
      <Category onCategoryChanged={handleChangeCategory} />
        {
          state.selectedCategory === CATEGORIES.ANIME ?
            <MainContent
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
              animeList={animeList} /> :
            state.selectedCategory === CATEGORIES.GAME ?
            <div>
              <SearchGame searchTerm={searchTerm} handleChange={handleChange} onSubmit={onSubmit}/>
                <ResultsGame gameResults={gameResults} />
            </div>
              :
              <div>
                <Search handleInput={handleInput} searchMovie={searchMovie} />
                <Results results={state.results} openPopup={openPopup} />
              {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
              </div>
        }
      </main>
    </div>
  );
}

export default App