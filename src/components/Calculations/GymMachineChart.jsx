import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GymMachinesChart = () => {
  const data = {
    labels: [
      'Treadmill',
      'Elliptical',
      'Bench Press',
      'Squat Rack',
      'Leg Press',
      'Rowing Machine',
      'Stationary Bike',
    ],
    datasets: [
      {
        label: 'Users (per week)',
        data: [120, 90, 80, 70, 60, 50, 40], // Sample user data for each machine
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Bar color
        borderColor: 'rgba(54, 162, 235, 1)', // Border color
        borderWidth: 1,
      },
      {
        label: 'Avg. Workout Duration (min)',
        data: [45, 35, 50, 40, 30, 25, 20], // Average duration for each machine
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Second dataset color
        borderColor: 'rgba(255, 99, 132, 1)', // Second dataset border color
        borderWidth: 1,
      },
      {
        label: 'Total Workouts Completed',
        data: [300, 250, 200, 150, 100, 80, 60], // Total workouts for each machine
        backgroundColor: 'rgba(255, 206, 86, 0.6)', // Third dataset color
        borderColor: 'rgba(255, 206, 86, 1)', // Third dataset border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gym Machines Performance Metrics',
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start y-axis at zero
        stacked: false, // Stacked bars option
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Gym Machines Performance and Usage</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GymMachinesChart;
