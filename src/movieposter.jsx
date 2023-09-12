import React, { useEffect, useState } from 'react';
import axios from 'axios';
import imdb from './assets/imdb.svg'
import tomato from './assets/tomato.svg'

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
          <div className='poster-movie'>
          <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
          <p>{movie.release_date}</p>
            <h3>{movie.title}</h3>
            <div className="ratings">
              <div>
                <img src={imdb} alt="" />
                <p>86.0/100</p>
              </div>
              <div>
                <img src={tomato} alt="" />
                <p>97%</p>
              </div>
            </div>
            <p>{movie.genre_ids.map((genre) => genre.name).join(', ')}</p>
          </div>
        ))}    
    </div> 
  );
};

export default TopMovies;
