import { MovieCard } from "./MovieCard";

function MovieList(props) {
  const { movies = [] } = props;

  return (
    <div className="movieList">
      {movies.length ? (
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} type={movie.Type} />
        ))
      ) : (
        <h2>Nothig found</h2>
      )}
    </div>
  );
}

export { MovieList };
