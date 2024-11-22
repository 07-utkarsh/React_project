import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register necessary components and datalabels plugin
ChartJS.register(ArcElement, Title, Tooltip, Legend, ChartDataLabels);

const NutritionChart = () => {
  const data = {
    labels: ['Carbohydrates', 'Protein', 'Fat', 'Fiber', 'Sugars', 'Vitamins', 'Minerals'],
    datasets: [
      {
        label: 'Nutritional Breakdown',
        data: [200, 100, 70, 50, 30, 25, 15], // Sample nutritional data
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Carbohydrates
          'rgba(54, 162, 235, 0.6)', // Protein
          'rgba(255, 206, 86, 0.6)', // Fat
          'rgba(75, 192, 192, 0.6)', // Fiber
          'rgba(255, 159, 64, 0.6)', // Sugars
          'rgba(153, 102, 255, 0.6)', // Vitamins
          'rgba(255, 205, 86, 0.6)', // Minerals
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 205, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: '#fff',
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2 className="text-2xl font-semibold">Expanded Nutritional Breakdown</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default NutritionChart;
