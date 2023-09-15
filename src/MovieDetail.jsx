import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import logo from './assets/logo.svg'
import home from './assets/Home.svg'
import movies from './assets/Movie Projector.svg'
import TVSeries from './assets/TV show.svg'
import upcoming from './assets/Calendar.svg'
import logout from './assets/Logout.svg'
function MovieDetail() {
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  
    useEffect(() => {
      axios
        .get(`https://api.themoviedb.org/3/movie/${id}`, {
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
    }, [id]);
  
  return (
    <div className='movie-deails-page'>
        <div className="navbar">
            <img src={logo} alt="" />
            <div className="nav-item">
                <img src={home} alt="" />
                <p>Home</p>
            </div>
            <div className="nav-item nav-item-active">
                <img src={movies} alt="" />
                <p>Movies</p>
            </div>
            <div className="nav-item">
                <img src={TVSeries} alt="" />
                <p>TV Shows</p>
            </div>
            <div className="nav-item">
                <img src={upcoming} alt="" />
                <p>Upcoming</p>
            </div>
            <div className="nav-item-quiz">
                <p>Play movie quizes and earn free tickets</p>
                <p>50k people are playing now</p>
                <div>Start playing</div>
            </div>
            <div className="nav-item">
                <img src={logout} alt="" />
                <p>Log Out</p>
            </div>
            
        </div>
        <div className='movie-details'>
        <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="" />
        <div className='movie-details-row'>
            <h2 data-testid="movie-title">{movie.title}</h2>
            &#x2022;
            <h2 data-testid="movie-release-date">{movie.release_date}</h2>
            &#x2022;
            <h2 data-testid="movie-runtime">{movie.runtime} minutes</h2>
        </div>
        <p data-testid="movie-overview">{movie.overview}</p>
        </div>
    </div>
    
  );
}

export default MovieDetail;