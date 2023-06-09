import { Card } from "../../../components/Card/Card";
import { Movie } from "./Movie";

export const MovieList = () => {
  return (
    <Card className="">
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <h4 className="text-black font-bold text-lg">Transactions</h4>
          <span className="text-sm text-gray-400"> | Upcoming movies</span>
        </div>
        <div className="underline text-gray-500">
          <span>View all</span>
        </div>
      </div>
      <div>
        <Movie />
      </div>
    </Card>
  );
};
