import React from 'react';
import BMICalculator from './BMICalculator';
import WeightCalculator from './WeightCalculator';
import UserAdmissionsGraph from './UserAdmissionsGraph';
import FitnessScaleGraph from './FitnessScaleGraph';
import PieChart from './PieChart';
import RadarChart from './RadarChart';
import WeightTrackingGraph from './WeightTrackingGraph';
import ActivityDurationGraph from './ActivityDurationGraph';
import NutritionChart from './NutritionChart';
import GymMachinesChart from './GymMachineChart';
import CalorieBurnCalculator from './CalorieBurnCalculator';
import TargetHeartRateCalculator from './TargetHeartRateCalculator';
import VO2MaxCalculator from './VO2MaxCalculator';
import CalorieDeficitCalculator from './CalorieDeficitCalculator';

const Calculations = () => {
  return (
    <div className="p-6 bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">Calculations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Add Calculators */}
        <div className="calculator-container mb-8 p-4 bg-gray-800 rounded shadow-lg">
          <h2 className="text-2xl font-semibold">Calorie Burn Calculator</h2>
          <CalorieBurnCalculator />
        </div>
        <div className="calculator-container mb-8 p-4 bg-gray-800 rounded shadow-lg">
          <h2 className="text-2xl font-semibold">Target Heart Rate Zone Calculator</h2>
          <TargetHeartRateCalculator />
        </div>
        <div className="calculator-container mb-8 p-4 bg-gray-800 rounded shadow-lg">
          <h2 className="text-2xl font-semibold">VO2 Max Calculator</h2>
          <VO2MaxCalculator />
        </div>
        <div className="calculator-container mb-8 p-4 bg-gray-800 rounded shadow-lg">
          <h2 className="text-2xl font-semibold">Calorie Deficit Calculator</h2>
          <CalorieDeficitCalculator />
        </div>

        {/* Add Graphs */}
        <div className="graph-container mb-8 p-4 bg-gray-800 rounded shadow-lg">
          <h2 className="text-2xl font-semibold">BMI Calculator</h2>
          <BMICalculator />
        </div>
        <div className="graph-container mb-8 p-4 bg-gray-800 rounded shadow-lg">
          <h2 className="text-2xl font-semibold">Weight Calculator</h2>
          <WeightCalculator />
        </div>
        <div className="graph-container mb-8 p-4 bg-gray-800 rounded shadow-lg">
          <h2 className="text-2xl font-semibold">User Admissions</h2>
          <UserAdmissionsGraph />
        </div>
        <div className="graph-container mb-8 p-4 bg-gray-800 rounded shadow-lg">
          <h2 className="text-2xl font-semibold">Fitness Scale</h2>
          <FitnessScaleGraph />
        </div>
        <div className="graph-container mb-8 p-4 bg-gray-800 rounded shadow-lg">
          <h2 className="text-2xl font-semibold">Distribution of Colors</h2>
          <PieChart />
        </div>
        <div className="graph-container mb-8 p-4 bg-gray-800 rounded shadow-lg">
          <h2 className="text-2xl font-semibold">Skills Radar</h2>
          <RadarChart />
        </div>
        <div className="graph-container mb-8 p-4 bg-gray-800 rounded shadow-lg">
          <h2 className="text-2xl font-semibold">Monthly Weight Tracking</h2>
          <WeightTrackingGraph />
        </div>
        <div className="graph-container mb-8 p-4 bg-gray-800 rounded shadow-lg">
          <h2 className="text-2xl font-semibold">Daily Exercise Duration</h2>
          <ActivityDurationGraph />
        </div>
        <div className="graph-container mb-8 p-4 bg-gray-800 rounded shadow-lg">
          <h2 className="text-2xl font-semibold">Nutritional Intake Distribution</h2>
          <NutritionChart />
        </div>
        <div className="graph-container mb-8 p-4 bg-gray-800 rounded shadow-lg">
          <h2 className="text-2xl font-semibold">Gym Machines Usage</h2>
          <GymMachinesChart />
        </div>
      </div>
    </div>
  );
};

export default Calculations;
