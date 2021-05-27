import React, { ReactElement, useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import "../style/Movie.css";
import { DataContext } from "./dataContext";

export default function Movie(props: { props: any }): ReactElement {
  const movieList = useContext(DataContext);
  const location = useHistory<any>().location.state.MOVIEID;
  const history = useHistory();
  const selectedMovie = movieList.movies.find((movie) => movie.id == location);
  const backButtonHandle = () => {
    history.goBack();
  };
  return (
    <>
      <div>
        <button
          className="backButtonComponent"
          onClick={() => backButtonHandle()}
        >
          Go Back
        </button>
      </div>
      <div className="movieDetailComponent">
        <h1>{selectedMovie?.title}</h1>
        <h2>
          Overview:
          <span>
            <br></br>
            {selectedMovie?.overview}
          </span>
        </h2>
        <h3>Realese data: {selectedMovie?.release_date}</h3>
      </div>
    </>
  );
}
