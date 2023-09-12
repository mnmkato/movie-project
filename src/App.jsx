import './App.css'
import logo from './assets/logo.svg'
import menu from './assets/menu.svg'

import React, { useState, useEffect } from 'react';
import MovieSearch from './moviesearch'
import MovieDetails from './moviedetails'
import axios from 'axios';
import TopMovies from './movieposter';

function App() {
  const [movie, setMovie] = useState({});
  const movieId = 458156

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

  const backgroundImageStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '600px',
  };
  return (<>
     <div style={backgroundImageStyle}>
    <div className='content'>
 
    <div className='header'>
      <img src={logo} alt="" />
      <MovieSearch />
      <div className='header-menu'>
        <p>Sign In</p>
        <img src={menu} alt="" />
      </div>
    </div>
    <MovieDetails />
    </div>
    </div>
    <div className="movie-grid">
      <div classcdName="featured-header">
      <h1>Top 10 Movies</h1>
      <p>See More  &gt; </p>
      </div>
        <TopMovies/>
    </div>
    </>
   ); 
}

export default App
