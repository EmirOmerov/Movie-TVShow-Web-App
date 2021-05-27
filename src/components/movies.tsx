import React, { useContext, useState } from "react";
import Movie from "../components/movieComponents";
import "../App.css";
import { DataContext } from "./dataContext";
import { useHistory } from "react-router-dom";
import "../style/Movie.css";

const Image = "http://image.tmdb.org/t/p/w500/";

const Movies: React.FC = () => {
  const movies = useContext(DataContext);
  const history = useHistory();
  var MOVIEID: number = 0;
  var poster: string = "";
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [isLoad, setLoad] = useState<any>(false);
  const srchName = searchTitle.substr(0, 2).toLowerCase();
  var compareTitle: string = "";
  const filteredMovies = movies.movies.filter((movie) => {
    return movie.title.toLowerCase().startsWith(searchTitle.toLowerCase());
  });

  const handleSearch = (e: any) => {
    setSearchTitle(e);
    filteredMovies.map((movie) => {
      return (compareTitle = movie.title.substr(0, 2).toLowerCase());
    });
    if (compareTitle === srchName) {
      setLoad(true);
    } else if (!e) {
      setLoad(false);
    }
  };

  const handleMovie = (event: number) => {
    var movieID = event;
    history.push({
      pathname: "/movie",
      state: {
        MOVIEID: movieID,
      },
    });
  };

  return (
    <div>
      <div className="SearchBarComponent">
        <form action="/" method="get">
          <input
            type="text"
            id="header-search"
            placeholder="Search..."
            name="s"
            className="searchInput"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </form>
      </div>
      {isLoad ? (
        <div className="movieListFound">
          {filteredMovies.map((movie) => {
            poster = movie.backdrop_path;
            MOVIEID = movie.id;
            return (
              <ul className="ulFoundMovies">
                <li
                  key={movie.id}
                  onClick={() => handleMovie(movie.id)}
                  className="foundMovie"
                >
                  <img src={Image + poster} className="posterComponent"></img>
                  <h1 className="movieFoundTitle">
                    <span>{movie.title}</span>
                  </h1>
                </li>
              </ul>
            );
          })}
        </div>
      ) : (
        <div className="moviesComponent">
          {movies.movies.map((movie) => {
            MOVIEID = movie.id;
            poster = movie.backdrop_path;
            return (
              <ul className="ulMovies">
                <li
                  key={movie.id}
                  className="movieComponent"
                  onClick={() => handleMovie(movie.id)}
                >
                  <img src={Image + poster} className="posterComponent"></img>
                  <h1 className="movieTitle">
                    <span>{movie.title}</span>
                  </h1>
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Movies;
