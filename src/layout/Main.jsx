import React from "react";
import { MovieList } from "../components/MovieList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    search: "",
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Harry Potter`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
          loading: false,
        })
      );
  }

  handleSearch = (searchValue, movieType = "all") => {
    this.setState({ loading: true });
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}${movieType === "all" ? "" : `&type=${movieType}`}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
          loading: false,
        })
      );
  };

  render() {
    return (
      <main className="container content">
        <Search search={this.handleSearch} />
        {!this.state.loading ? <MovieList movies={this.state.movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
