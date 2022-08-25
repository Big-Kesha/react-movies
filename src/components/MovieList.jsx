import { MovieCard } from "./MovieCard"

function MovieList(props) {
  
  const {movies} = props;

 
  return(
    <div className="movieList">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID}
          title={movie.Title} 
          year={movie.Year} 
          poster={movie.Poster} 
          />
      ))} 
    </div>
  )
}

export {MovieList}