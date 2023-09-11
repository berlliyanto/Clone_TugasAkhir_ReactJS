import React from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChart = () => {
    let labels = [
        "A", "B", "C", "D", "E", "F"
    ]
    let data = {
        labels: labels,
        datasets: [{
            barPercentage: 0.5,
            barThickness: 50,
            maxBarThickness: 60,
            minBarLength: 2,
            label: 'My First Dataset',
            data: [59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
            ],
            borderWidth: 1
        }]
    };

    let option = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            },
            
        },
        legends: {
            labels: {
                fontSize: 20
            }
        }
    };

    return (
        <div className="chart">
            <Bar
                height={400}
                data={data}
                options={option}
            />
        </div>
    )
}

export default BarChart;