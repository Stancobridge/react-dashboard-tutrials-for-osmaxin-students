import { FaHeart } from "react-icons/fa";
import { Card } from "../../../components/Card/Card";
import { DUMMY_LIST } from "./DummyArrayList";
export const DummyMovieList = () => {
    return (
        <div>
            {DUMMY_LIST.map((list, index) => <div key={index} className="flex space-y-4 space-x-2 items-center">
                <Card className="w-12 p-1 border shadow-sm">
                    <img src={list.img} alt="movie" />
                </Card>
                <div className="flex items-center justify-between w-full ">
                    <div>
                        <h4 className="font-bold">{list.title}</h4>
                        <p className="text-xs text-gray-500">{list.releaseYear}</p>
                    </div>
                    <div>
                        <button className="bg-gray-400 bg-pink-600 hover:bg-pink-500 p-2 transition-colors rounded-full shadow-lg">
                            <FaHeart />
                        </button>
                    </div>
               </div>
            </div>)}
            
        </div>
    )
}