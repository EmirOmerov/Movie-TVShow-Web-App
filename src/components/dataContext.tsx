import React, { createContext, useState, useEffect } from "react";

const MOVIE_BASE_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=2060abcf2c10343a4fe4597d337de214";
const SHOWS_BASE_URL =
  "https://api.themoviedb.org/3/tv/popular?api_key=2060abcf2c10343a4fe4597d337de214";

type Movie = {
  title: string;
  release_date: string;
  overview: string;
  id: number;
  backdrop_path: string;
};
type Show = {
  name: string;
  first_air_date: string;
  overview: string;
  id: number;
  backdrop_path: string;
};
interface ContextData {
  movies: Movie[];
  shows: Show[];
}
export const DataContext = createContext<ContextData>({
  movies: [],
  shows: [],
});

const DataCont = (props: {
  children: React.ReactChild | React.ReactFragment | React.ReactPortal;
}) => {
  const [shows, setShows] = useState<Show[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  shows.length = 10;
  movies.length = 10;
  console.log(movies);

  const fetchTvShows = () => {
    fetch(SHOWS_BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        var showData = data.results;
        setShows(showData);
      });
  };
  const fetchMovies = () => {
    fetch(MOVIE_BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        var movieData = data.results;
        setMovies(movieData);
      });
  };

  useEffect(() => {
    fetchMovies();
    fetchTvShows();
  }, []);

  return (
    <DataContext.Provider value={{ movies, shows }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataCont;
