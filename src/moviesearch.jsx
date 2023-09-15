import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

const MovieSearch = () => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      if (query) {
        axios
          .get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
              api_key: import.meta.env.VITE_TMDB_API_KEY,
              query,
            },
          })
          .then((response) => {
            setMovies(response.data.results);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      } else{
        setMovies([]);
      }
    }, [query]);
  return (
    <div>
     <form className='search-form' action="/search" method="get">
        <input type="search"
        className='search-input'
          id="search" 
          name="q" 
          placeholder="What do you want to watch?"
          autoComplete='off'
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
         />
        <button type="submit" className="search-button">
        <i className="fa fa-search"></i>
        </button>
    </form>
    <div className='results-list'>
        {movies.slice(0,5).map((movie) => (
           <Link to={`/movies/${movie.id}`}>
          <div className="result-item" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            <h5>{movie.title}</h5>
            <p>{movie.release_date}</p>
          </div> 
          </Link>         
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
