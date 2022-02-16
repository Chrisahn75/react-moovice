import React from "react";
import Card from "../components/Card"
import { Link } from "react-router-dom";

class Popular extends React.Component {
    constructor() {
      super();
  
      this.state = {
        movies: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5db36b700acda7185166a4e97a159b98")
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          this.setState({movies: res.results});
        });
    }
  
    render() {
      return (
        <>
          <h1 className="text-center">Popular</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {this.state.movies.map((movie) => (
              <Card key={movie.id} movieSelected={movie}/>
            ))}
          </div>
        </>
      );
    }
  }
  
  export default Popular;