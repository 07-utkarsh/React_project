import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityDurationGraph = () => {
  const data = {
    labels: ['Running', 'Walking', 'Cycling', 'Swimming'],
    datasets: [
      {
        label: 'Minutes per Day',
        data: [60, 45, 30, 20], // Sample data
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
        ],
        borderRadius: 10, // Rounded bar corners
        borderSkipped: false, // No border on the top of the bar for rounded effect
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Daily Exercise Duration',
        color: '#333',
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid for cleaner look
        },
        ticks: {
          color: '#333',
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
        ticks: {
          color: '#333',
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mt-8">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
        Daily Exercise Duration
      </h2>
      <div className="h-96">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ActivityDurationGraph;
