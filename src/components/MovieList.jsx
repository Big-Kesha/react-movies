import { MovieCard } from "./MovieCard"

function MovieList(props) {
  
  const {movies} = props;

  console.log(movies)
  return(
    <MovieList>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID}
          title={movie.Title} 
          year={movie.Year} 
          poster={movie.Poster} 
          />
      ))} 
    </MovieList>
  )
}

export {MovieList}