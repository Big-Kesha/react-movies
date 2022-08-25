import React from "react"
import { MovieList } from "../components/MovieList"
let i = 1;

class Main extends React.Component {
  state = {
    movies: [],
  }
  componentDidMount() {
    
    console.log('Component did mount: ' + i);
    i++;
    fetch('http://www.omdbapi.com/?s=matrix&apikey=ea977fb7')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }

  
  
  render(){
    const {movies} = this.state;

    return (
      <main className="container content">
        {
          movies.length ? (
            <MovieList movies={this.state.movies} />  
          ) : <h5>Loading...</h5>
        }
      </main>
  )}
  
}

export {Main}