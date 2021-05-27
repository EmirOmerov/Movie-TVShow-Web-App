import React, { useContext, useState } from "react";
import "../style/Show.css";
import { DataContext } from "./dataContext";
import { useHistory } from "react-router-dom";

const Image = "http://image.tmdb.org/t/p/w500/";

const Shows: React.FC = () => {
  const shows = useContext(DataContext);
  const history = useHistory();
  var SHOWID: number = 0;
  var poster: string = "";
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [isLoad, setLoad] = useState<any>(false);
  const srchName = searchTitle.substr(0, 2).toLowerCase();
  var compareTitle: string = "";
  const filteredShows = shows.shows.filter((show) => {
    return show.name.toLowerCase().startsWith(searchTitle.toLowerCase());
  });

  const handleSearch = (e: any) => {
    setSearchTitle(e);
    filteredShows.map((show) => {
      return (compareTitle = show.name.substr(0, 2).toLowerCase());
    });
    if (compareTitle === srchName) {
      setLoad(true);
    } else if (!e) {
      setLoad(false);
    }
  };

  const handleShow = (event: number) => {
    var showID = event;
    history.push({
      pathname: "/show",
      state: {
        SHOWID: showID,
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
        <div className="showListFound">
          {filteredShows.map((show) => {
            poster = show.backdrop_path;
            SHOWID = show.id;
            return (
              <ul className="ulFoundShows">
                <li
                  key={show.id}
                  onClick={() => handleShow(show.id)}
                  className="foundShow"
                >
                  <img src={Image + poster} className="posterComponent"></img>
                  <h1 className="showFoundTitle">
                    <span>{show.name}</span>
                  </h1>
                </li>
              </ul>
            );
          })}
        </div>
      ) : (
        <div className="showsComponent">
          {shows.shows.map((show) => {
            SHOWID = show.id;
            poster = show.backdrop_path;
            return (
              <ul className="ulShows">
                <li
                  key={show.id}
                  className="showComponent"
                  onClick={() => handleShow(show.id)}
                >
                  <img src={Image + poster} className="posterComponent"></img>
                  <h1 className="showTitle">
                    <span>{show.name}</span>
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

export default Shows;
