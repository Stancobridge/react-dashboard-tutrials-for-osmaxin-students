import { FaHeart } from "react-icons/fa";
import { Card } from "../../../components/Card/Card";
export const Movie = ({ isFavourite }: { isFavourite?: boolean }) => {
  return (
    <div className="flex mt-2 justify-between items-center">
      <div className="flex space-x-2 items-center">
        <Card className="w-12 p-1 border shadow-sm">
          <img
            src="https://m.media-amazon.com/images/M/MV5BZWE2ZWE5MDQtMTJlZi00MTVjLTkxOTgtNmNiYjg2NDIxN2NhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
            alt="flash"
          />
        </Card>
        <div>
          <h4 className="font-bold">Flash 2023</h4>
          <p className="text-xs text-gray-500">Apr 05, 2023</p>
        </div>
      </div>
      <div>
        <button
          className={` text-white ${
            isFavourite ? "bg-gray-400" : "bg-pink-600 hover:bg-pink-500"
          } p-2 transition-colors rounded-full shadow-lg`}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
};
