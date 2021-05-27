import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";

export const Main = () => {
  const history = useHistory();
  const handleMovie = () => {
    history.push({
      pathname: "/movies",
    });
  };
  const handleShows = () => {
    history.push({
      pathname: "/shows",
    });
  };
  return (
    <div>
      <button onClick={() => handleMovie()}>Movies</button>
      <button onClick={() => handleShows()}>Shows</button>
    </div>
  );
};
