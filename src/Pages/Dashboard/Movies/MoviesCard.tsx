import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BulletList } from "react-content-loader";
import { IMovie, IMovies } from "../../../base/interface/IMovies";
import { Card } from "../../../components/Card/Card";
import { MovieList } from "./MovieList";
import { DummyMovies } from "./DummyMovies";
import { useState } from "react";

const getMovies = async () => {
  const resp = await axios<IMovies>({
    url: `${process.env.REACT_APP_MOVIE_BASE_API_URL}/titles/x/upcoming`,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPID_HOST,
    },
  });
  return resp.data.results;
};

export const MovieCard = () => {
  const [showApiMovie, setShowApiMovie] = useState(false);
  const showMovieHandler = () => {
    setShowApiMovie(true)
  }
  const hideMovieHandler = () => {
    setShowApiMovie(false)
  }
  const { data, isInitialLoading, isLoading } = useQuery(
    ["pokemons"],
    getMovies
  );

  const checkerror = isInitialLoading || isLoading ? <BulletList /> : <MovieList movies={data as IMovie[]} />;
  return (
    <Card className="">
      <div className="flex justify-between
      ">
        <div className="flex items-center space-x-2">
          <h4 className="text-black font-bold text-lg">Transactions</h4>
          <span className="text-sm text-gray-400"> | Upcoming movies</span>
        </div>
        <div>
          <button onClick={showMovieHandler} className={`${showApiMovie ? "hidden" : "block"}  underline text-gray-500`}>View all</button>
          <button onClick={hideMovieHandler} className={`${showApiMovie ? "block" : "hidden"} underline text-gray-500`}>View less</button>
        </div>
      </div>
      <div>
        <DummyMovies />
        {showApiMovie ? checkerror : null}
      </div>
    </Card>
  );
};