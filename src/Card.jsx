import { Link } from 'react-router-dom';
function Card({data}){
    return(
        <>
        <div data-testid="movie-card" className='poster-movie'>
            <Link to={`/movies/${data.id}`}>
              <img
                data-testid="movie-poster"
                src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
                alt={`${data.title} Poster`}
              />
            </Link>
            <p data-testid="movie-release-date">{data.release_date}</p>
            <h3 data-testid="movie-title">{data.title}</h3>
          </div>
        </>
    )
}
export default Card