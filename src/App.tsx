import React from "react";
import Movies from "../src/components/movies";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import TvShows from "./components/tvShows";
import DataContext from "./components/dataContext";
import Movie from "./components/movieComponents";
import TvShow from "./components/tvShow";

const Navigation: React.FC = (props) => {
  return (
    <div className="NaviButtons">
      <NavLink
        exact
        className="firstButton"
        activeClassName="active1"
        to="/movies"
      >
        <span>Movies</span>
      </NavLink>
      <NavLink className="secondButton" exact activeClassName="active2" to="/">
        <span>TV Shows</span>
      </NavLink>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <DataContext>
          <Route path={["/", "/movies"]} exact component={Navigation} />
          <Route path="/" exact component={TvShows} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movie" component={Movie} />
          <Route path="/show" component={TvShow} />
        </DataContext>
      </Switch>
    </Router>
  );
};

export default App;
