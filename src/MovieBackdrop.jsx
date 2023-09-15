import React, { useEffect, useState } from 'react';
import axios from 'axios';
import imdb from './assets/imdb.svg'
import tomato from './assets/tomato.svg'
import play from './assets/play.svg'

const MovieBackdrop = () => {
  const [movie, setMovie] = useState({});
  const movieId = 238

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: import.meta.env.VITE_TMDB_API_KEY,
        },
      })
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]);
  return (
    <div className='featuer-movie'>
      <h1>{movie.title}</h1>
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
      <p>{movie.overview}</p>
      <div className='play-button'>
        <img src={play} alt="" />
        <p>WATCH TRAILER</p>
      </div>      
    </div>
  );
};

export default MovieBackdrop;
