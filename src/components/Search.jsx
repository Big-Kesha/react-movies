import React from "react";
import { Filters } from "../components/Filters";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Harry Potter",
      movieType: "all",
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleEnterKey = (e) => {
    if (e.key === "Enter") {
      this.props.search(this.state.value);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({
        movieType: e.target.dataset.movietype,
      }),
      () => {
        this.props.search(this.state.value, this.state.movieType);
      }
    );
  };

  render() {
    return (
      <>
        <div className="row flex">
          <div className="input-field col s12">
            <input
              placeholder="search"
              type="search"
              className="validate"
              value={this.state.value}
              onChange={this.handleChange}
              onKeyDown={this.handleEnterKey}
            />
          </div>
          <button className="btn search" onClick={() => this.props.search(this.state.value)}>
            Search
          </button>
        </div>
        <Filters handleFilter={this.handleFilter} movieType={this.state.movieType} />
      </>
    );
  }
}

export { Search };
