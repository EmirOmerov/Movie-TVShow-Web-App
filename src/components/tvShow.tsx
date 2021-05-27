import React, { ReactElement, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import "../style/Show.css";
import { DataContext } from "./dataContext";

export default function Show(props: { props: any }): ReactElement {
  const showLots = useContext(DataContext);
  const location = useHistory<any>().location.state.SHOWID;
  const history = useHistory();
  const selectedShow = showLots.shows.find((show) => show.id == location);
  console.log(selectedShow);

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
      <div className="showDetailComponent">
        <h1>{selectedShow?.name}</h1>
        <h2>
          Overview:
          <span>
            <br></br>
            {selectedShow?.overview}
          </span>
        </h2>
        <h3>Realese data: {selectedShow?.first_air_date}</h3>
      </div>
    </>
  );
}
