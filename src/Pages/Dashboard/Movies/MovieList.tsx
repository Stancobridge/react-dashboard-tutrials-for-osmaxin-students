import { IMovie } from "../../../base/interface/IMovies";
import { Movie } from "./Movie";

export const MovieList = ({ movies }: { movies: IMovie[] }) => {
  return (
    <>
      {movies.map((movie) => (
        <Movie movie={movie}  />
      ))}
    </>
  );
};
