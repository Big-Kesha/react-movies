import React from "react"
import { MovieList } from "../components/MovieList"

class Main extends React.Component {
  state = {
    movies: [],
  }
    
  componentDidMount() {
    fetch('http://www.omdbapi.com/?s=matrix&apikey=ea977fb7')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }
  
  render(){
    return (
      <main className="container content">
        {
          this.state.movies.length 
            ? (<MovieList movies={this.state.movies} />  
          ) : <h5>Loading...</h5>
        }
      </main>
  )}
  
}

export {Main}