import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RadarChart = () => {
  const data = {
    labels: ['Strength', 'Endurance', 'Flexibility', 'Balance', 'Coordination'], // Gym-related skills
    datasets: [
      {
        label: 'Fitness Skills',
        data: [80, 70, 60, 50, 65], // Sample skill levels (out of 100)
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color for the area under the line
        borderColor: 'rgba(75, 192, 192, 1)', // Color for the line
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Fitness Skills Radar</h2>
      <Radar data={data} />
    </div>
  );
};

export default RadarChart;
