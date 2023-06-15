import { BsArrowRightShort } from "react-icons/bs";
import { CiCreditCard1 } from 'react-icons/ci';
import { FaDollarSign } from "react-icons/fa";
import { Input } from "../../../components/Forms/Input";

export const CardInsertDetails = () => {
    return (
        <div className="mt-4">
            <Input className="border-b-2 border-b-pink-100 outline-none rounded-none" icon={<CiCreditCard1 className="text-3xl" />} placeholder="Card or phone" />
            <div className="flex">
                <Input className="border-b-2 border-b-pink-100 rounded-none outline-none mt-2" icon={[<FaDollarSign />, <BsArrowRightShort className="text-2xl" />]} placeholder="Prefered amount" />
                <Input placeholder="USD" className="border-b-2 border-b-pink-100 flex-1 outline-none rounded-none" />
            </div>
        </div>
    )
}