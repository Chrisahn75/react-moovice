import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Weekly from "./pages/Weekly";
import WeeklyBattle from "./pages/Weekly-battle";
import Popular from "./pages/Popular";
import PopularBattle from "./pages/Popular-battle";
import Favorite from "./pages/Favorite";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav class="navbar navbar-light bg-light justify-content-between">
          <Link className="p-2 text-decoration-none " to="/">Home</Link>
          <Link className="p-2 text-decoration-none" to="/weekly">Weekly</Link>
          <Link className="p-2 text-decoration-none" to="/weekly-battle">Weekly Battle</Link>
          <Link className="p-2 text-decoration-none" to="/popular">Popular</Link>
          <Link className="p-2 text-decoration-none" to="/popular-battle">Popular Battle</Link>
          <Link className="p-2 text-decoration-none" to="/favorite">Favorite</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/weekly" component={Weekly} />
          <Route exact path="/weekly-battle" component={WeeklyBattle} />
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/popular-battle" component={PopularBattle} />
          <Route exact path="/favorite" component={Favorite} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;