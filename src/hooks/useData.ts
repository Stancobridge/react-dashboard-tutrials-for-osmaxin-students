import { useState } from "react";

export const useData = () => {
    const [seletedIndex, setSelectedIndex] = useState(-1);
    const date = ['1D', '1W', '1M', '1Y']
    const labels = ["8/04", "", "9/04", "", "10/04", "", "11/04", "", "12/04", "", "13/04", "", "14/04"];
    
    const [data, setData] = useState({
        labels: labels,
        datasets: [
            {
                data: [0, 10, 7, 20, 14.5, 10, 20, 30, 20, 10, 10, 20, 20],
                backgroundcolor: 'transparent',
                borderColor: 'blue',
                pointBorderColor: 'transparent',
                pointBorderWidth: 5,
                tension: 0.5,
                fill: true,
            },
        ],
    });
    const options = {
        scales: {
            x: { grid: { display: false } },
            y: { ticks: { callback: (value) => value + 'k' } }
        }
    }
    const currentState = () => {
        setData({
            ...data,
            datasets: [{
                ...data.datasets[1],
                data: [0, 11, 6, 10, 20, 13, 10, 35, 38, 12, 5, 10, 13]
            }]
        });
    }
    const dateChange = () => {
        setData({
            ...data,
            datasets: [{
                ...data.datasets[0],
                data: [0, 10, 20, 13, 10, 35, 5, 10, 13]
            }]
        });
    }
    const moneyIncome = () => {
        setData({
            ...data,
            datasets: [{
                ...data.datasets[0],
                data: [0, 11, 6, 10, 12, 5, 10, 13]
            }]
        });
    }
    return { currentState, data, date, dateChange, moneyIncome, setSelectedIndex, setData, labels, options,seletedIndex,}
} 