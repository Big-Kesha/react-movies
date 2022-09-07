function MovieCard(props) {
  return (
    <div className="flexcard card teal lighten-5">
      <div className="card-image waves-effect waves-block waves-light">
        {props.poster === "N/A" ? (
          <img src={`https://via.placeholder.com/150x300?text=${props.title}`} alt="" />
        ) : (
          <img className="activator" src={props.poster} alt="" />
        )}
      </div>
      <div className="card-content">
        <span className="card-title grey-text text-darken-4">{props.title}</span>
        <p className="bottom">
          {props.year} <span className="right">{props.type}</span>
        </p>
      </div>
    </div>
  );
}

export { MovieCard };
