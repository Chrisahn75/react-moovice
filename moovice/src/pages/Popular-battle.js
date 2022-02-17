import React from "react";
import Card from "../components/Card";

class PopularBattle extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentBattle: 0,
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
      isLoading: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a8988153af227c504cd05b5bc12bdce9")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          movies: res.results,
          isLoading: false,
        });
      });
    }

  handleClick(id) {
    const stock = [...this.state.favorites,id];
    localStorage.setItem("favorites", JSON.stringify([...this.state.favorites,id]));
    this.setState(() => ({
      currentBattle: this.state.currentBattle + 2,
      favorites: stock
    }));
    console.log(stock);
  }

  render() {
    const {isLoading,movies,currentBattle} = this.state;
    return (
      <>
        <h1 className="text-center">Popular Battle</h1>
        {isLoading && (
          <div role="status"></div>
        )}
        {movies.length > 0 && currentBattle < movies.length - 1 && (
          <div className="p-2 d-flex justify-content-evenly">
            <Card movieSelected={movies[currentBattle]} key={movies.id}/>
            <Card movieSelected={movies[currentBattle + 1]} key={movies.id}/>
          </div>
        )}
        {currentBattle > movies.length - 1 && (
          <h1 className="text-center">Vous avez parcouru tous les films !</h1>
        )}
      </>
    );
  }
}

export default PopularBattle;
