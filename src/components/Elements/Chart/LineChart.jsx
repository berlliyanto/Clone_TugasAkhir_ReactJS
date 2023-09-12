import React from "react";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
)

const LineChart = ({ label, items, labels, gridColor, labelColor }) => {

    let data = {
        labels: labels,
        datasets: [{
            label: label,
            data: items,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
            ],
            borderWidth: 1
        }]
    };

    let option = {
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    color: gridColor, 
                },
                ticks: {
                    color: labelColor, 
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: gridColor,
                },
                ticks: {
                    color: labelColor,
                }
            },

        },
        legends: {
            labels: {
                fontSize: 20,
            }
        }
    };

    return (
        <div className="chart">
            <Line
                height={400}
                data={data}
                options={option}
            />
        </div>
    )
}

export default LineChart;