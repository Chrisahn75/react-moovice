import React from "react";

class Card extends React.Component {
    render() {
      return (
        <>
          <div className="mt-3">
            <div className="card-shadow" style={{ width: "18em" }}>
              <img
                src={`https://image.tmdb.org/t/p/w300${this.props.movieSelected.poster_path}`}
                className="card"
                alt="Affiche"
              />
              <div className="card-body">
                <h3 className="card-title">{this.props.movieSelected.title}</h3>
                <p 
                 className="card-text overflow-scroll"
                 style={{ height: "100px" }}
                >
                  {this.props.movieSelected.overview}
                </p>
              </div>
              <p> {this.props.movieSelected.release_date}</p>
            </div>
          </div>
        </>
      );
    }
  }
  
  export default Card;