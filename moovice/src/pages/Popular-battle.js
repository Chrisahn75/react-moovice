import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

class PopularBattle extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      pages: 0,
      currentBattle: 0
    }
  }
    render() {
        return (
          <>
            <h1 className="text-center">Popular Battle</h1>
          </>
        );
      }
}

export default PopularBattle;