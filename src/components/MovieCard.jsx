function MovieCard (props) {

  return(
    <div className="card teal lighten-5">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={props.poster}/>
      </div>
      <div className="card-content">
        <span className="card-title grey-text text-darken-4">{props.title}</span>
        <span className="grey-text text-darken-4">{props.year}</span>
      </div>
    </div>
  )
}

export {MovieCard}