import React from "react";
import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
ChartJs.register(
    Tooltip, Title, ArcElement, Legend
);

const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4,
    }]
};

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
};



export default function DoughnutChart({style}) {
    return (
        <div style={style}>
            <Doughnut data={data} options={options}/>
        </div>
    )
}