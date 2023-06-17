import { Line } from "react-chartjs-2"
import { Card } from "../../../components/Card/Card";
import { RxDotFilled } from 'react-icons/rx';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { useData } from "../../../hooks/useData";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

export const Chart = () => {

    const { currentState, data,  setSelectedIndex, options, moneyIncome, dateChange, date, seletedIndex } = useData()
    return (
        <Card>
            <div className="flex items-center justify-between">
                <h1 className="font-bold py-4">Statistic</h1>
                <div>
                    {date.map((dates, index) => <button key={index} className={seletedIndex === index ? "py-1 px-2 text-black bg-white" : "py-1 px-2 text-black bg-pink-100"} onMouseEnter={dateChange} onMouseLeave={currentState} onClick={() => setSelectedIndex(index)}>{dates}</button>)}
                </div>
            </div>
            <Line data={data} options={options} />
            <div className="flex justify-center mt-2">
                <div className="flex items-center">
                    <RxDotFilled className="text-blue-800 text-2xl" />
                    <p title="Click to see the Money Income" onClick={moneyIncome} className="text-pink-600 text-sm">Money income</p>
                </div>
                <div className="flex items-center">
                    <RxDotFilled className="text-red-800 text-2xl" />
                    <p title="Current Sate" onClick={currentState} className="text-pink-600 text-sm">Current State</p>
                </div>
            </div>
        </Card>
    )
}

