import { CiPercent } from 'react-icons/ci';
import { BsArrowRight } from "react-icons/bs";


export const GetStartedToDepost = () => {
    return (
        <div className='bg-pink-50 p-6 rounded'>
            <div className='flex items-center justify-between'>
                <CiPercent className="bg-blue-600 text-white rounded-full text-2xl" />
                <div>
                    <button className='flex items-center space-x-2 bg-black text-white py-1 px-4 rounded'>
                        <h4>Get Started</h4>
                        <BsArrowRight />
                    </button>
                </div>
            </div>
            <div className='pt-6'>
                <h1 className='text-pink-900 font-bold'>Create a new deposit!</h1>
                <p className='text-pink-600 text-sm'>Choose a flexible deposit for your savings suited to your needs in InvestBank</p>
            </div>
        </div>
    )
}