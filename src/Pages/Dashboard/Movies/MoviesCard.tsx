import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BulletList } from "react-content-loader";
import { IMovie, IMovies } from "../../../base/interface/IMovies";
import { Card } from "../../../components/Card/Card";
import { MovieList } from "./MovieList";

type PokemonResults = {
  results: {
    name: string;
    url: string;
  }[];
};

const getPokemon = async () => {
  const resp = await axios<PokemonResults>({
    url: "https://pokeapi.co/api/v2/pokemon",
  });
  return resp.data.results;
};

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
  const { data, isInitialLoading, isLoading, refetch } = useQuery(
    ["pokemons"],
    getMovies
  );
  return (
    <Card className="">
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <h4 className="text-black font-bold text-lg">Transactions</h4>
          <span className="text-sm text-gray-400"> | Upcoming movies</span>
        </div>
        <div className="underline text-gray-500">
          <button onClick={() => refetch()}>View all</button>
        </div>
      </div>
      <div>
        {isLoading || isInitialLoading ? (
          <BulletList />
        ) : (
          <MovieList movies={data as IMovie[]} />
        )}
      </div>
    </Card>
  );
};
