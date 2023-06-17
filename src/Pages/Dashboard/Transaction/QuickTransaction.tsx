import { Card } from "../../../components/Card/Card";
import { BsFillStarFill } from "react-icons/bs";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { RiMastercardFill } from 'react-icons/ri';
import { GetStartedToDepost } from "./GetStartedToDepost";
import { CardInsertDetails } from "./CardInsertDetails";

export const QuickTransaction = () => {
    return (
        <Card className="mt-6">
            <div className="flex justify-between text-2sm">
                <div className="flex space-x-2 items-center">
                    <h4 className="font-bold">Quick Transfer</h4>
                    <p className="text-pink-600 text-xs">| Mobile top-up</p>
                </div>
                <div>
                    <button className="underline text-pink-600">See all</button>
                </div>
            </div>
            <div className="flex mt-4 space-x-4 justify-between">
                <Card>
                    <div className="flex items-center space-x-2 ">
                        <div className="bg-blue-800 w-[80px] h-[60px] rounded relative">
                            <BsFillStarFill className="bg-yellow-400 text-white p-[3px] rounded-full translate-y-[-5px] translate-x-[-5px]" />
                            <h1 className="text-white text-sm font-bold absolute bottom-0 p-1">VISA</h1>
                        </div>
                        <div>
                            <p className="text-pink-600 text-sm">3149 Debit card</p>
                            <h4 className="font-bold text-sm">2895.15 USD</h4>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex items-center space-x-2 ">
                        <div className="bg-blue-800 w-[80px] h-[60px] rounded relative">
                            <BsFillStarFill className="bg-yellow-400 text-white p-[3px] rounded-full translate-y-[-5px] translate-x-[-5px]" />
                            <RiMastercardFill className="text-white text-3xl font-bold absolute bottom-0 p-1 text-orange-600" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <div>
                                <p className="text-pink-600 text-sm">Debit</p>
                                <h4 className="font-bold text-sm">EUR</h4>
                            </div>
                            <div>
                                <MdOutlineArrowForwardIos />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div>
                <CardInsertDetails />
            </div>
            <div className="mt-4">
                <GetStartedToDepost />
            </div>
        </Card>
    )
}