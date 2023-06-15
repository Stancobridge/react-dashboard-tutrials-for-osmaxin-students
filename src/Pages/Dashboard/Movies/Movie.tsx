import { IMovie } from "../../../base/interface/IMovies";
import { APIMovies } from "./APIMovies";

export const Movie = ({
  isFavourite,
  movie,
}: {
  isFavourite?: boolean;
  movie: IMovie;
}) =>{
  return (
    <div>
      <APIMovies movie={movie}/>
    </div>
  );
};
