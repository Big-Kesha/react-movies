function Filters(props) {
  const { handleFilter, movieType } = props;

  return (
    <div className="filters">
      <label>
        <input name="movieType" type="radio" onChange={handleFilter} data-movietype="all" checked={movieType === "all"} />
        <span>All</span>
      </label>
      <label>
        <input name="movieType" type="radio" onChange={handleFilter} data-movietype="movie" checked={movieType === "movie"} />
        <span>Movies only</span>
      </label>
      <label>
        <input name="movieType" type="radio" onChange={handleFilter} data-movietype="series" checked={movieType === "series"} />
        <span>Series only</span>
      </label>
    </div>
  );
}

export { Filters };
