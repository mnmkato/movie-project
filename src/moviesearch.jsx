import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      }
    }, [query]);
  return (
    <div>
     <form className='search-form' action="/search" method="get">
        <input type="search"
          id="search" 
          name="q" 
          placeholder="What do you want to watch?"
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
         />
        <input type="submit" />
        <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </form>
    </div>
  );
};

export default MovieSearch;
