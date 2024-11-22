import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register necessary components including the datalabels plugin
ChartJS.register(ArcElement, Title, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const data = {
    labels: [
      'Treadmill', 
      'Elliptical', 
      'Stationary Bike', 
      'Rowing Machine', 
      'Leg Press', 
      'Chest Press', 
      'Lat Pulldown', 
      'Smith Machine', 
      'Cable Machine'
    ], // Categories of gym machines
    datasets: [
      {
        label: 'Gym Machines Usage',
        data: [120, 80, 100, 50, 60, 30, 40, 20, 90], // Sample usage data for each machine (in hours or counts)
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',  // Treadmill
          'rgba(54, 162, 235, 0.6)',  // Elliptical
          'rgba(255, 206, 86, 0.6)',  // Stationary Bike
          'rgba(75, 192, 192, 0.6)',  // Rowing Machine
          'rgba(153, 102, 255, 0.6)', // Leg Press
          'rgba(255, 159, 64, 0.6)',  // Chest Press
          'rgba(0, 255, 0, 0.6)',     // Lat Pulldown
          'rgba(255, 0, 255, 0.6)',   // Smith Machine
          'rgba(255, 255, 0, 0.6)',   // Cable Machine
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(255, 255, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        color: 'black',
        font: {
          weight: 'bold',
          size: 14,
        },
        formatter: (value, context) => {
          return `${context.chart.data.labels[context.dataIndex]}: ${value}`; // Display label with value
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Usage Distribution of Gym Machines</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
