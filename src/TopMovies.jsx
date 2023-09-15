import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const TopMovies = () => {
const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated`, {
        params: {
          api_key: import.meta.env.VITE_TMDB_API_KEY,
           language: 'en-US',
          page: 1
        },
      })
      .then((response) => {
        setTopMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching top-rated movies:', error);
      });
  }, []);
  return (
    <div className="movie-grid-items">
        {topMovies.slice(0, 10).map((movie) => (
           <Card key={movie.id} data={movie} /> 
        ))}    
    </div> 
  );
};

export default TopMovies;
