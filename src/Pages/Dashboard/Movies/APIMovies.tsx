import { Card } from "../../../components/Card/Card";
import { FaHeart } from "react-icons/fa";
import { IMovie } from "../../../base/interface/IMovies";

export const APIMovies = ({
    isFavourite,
    movie,
}: {
    isFavourite?: boolean;
    movie: IMovie;
}) => {
    return (
        <div className="flex mt-2 justify-between items-center">
            <div className="flex space-x-2 items-center">
                <Card className="w-12 p-1 border shadow-sm">
                    <img src={movie.primaryImage?.url} alt="flash" />
                </Card>
                <div>
                    <h4 className="font-bold">{movie.originalTitleText.text}</h4>
                    <p className="text-xs text-gray-500">{movie.releaseYear.year}</p>
                </div>
            </div>
            <div>
                <button
                    className={` text-white ${isFavourite ? "bg-gray-400" : "bg-pink-600 hover:bg-pink-500"
                        } p-2 transition-colors rounded-full shadow-lg`}>
                    <FaHeart />
                </button>
            </div>
        </div>
    )
}