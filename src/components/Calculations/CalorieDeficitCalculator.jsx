import React, { useState } from 'react';

const CalorieDeficitCalculator = () => {
  const [bmr, setBmr] = useState('');
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [goal, setGoal] = useState('');
  const [caloriesNeeded, setCaloriesNeeded] = useState(null);

  const activityMultipliers = {
    Sedentary: 1.2,
    Light: 1.375,
    Moderate: 1.55,
    Active: 1.725,
    VeryActive: 1.9,
  };

  const calculateCaloriesNeeded = () => {
    const tdee = bmr * activityLevel;
    const deficit = goal === 'lose' ? tdee - 500 : tdee + 500; // 500 kcal deficit/surplus for 1 pound/week
    setCaloriesNeeded(deficit.toFixed(2));
  };

  return (
    <div className="bg-black text-white p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Calorie Deficit Calculator</h2>
      <input
        type="number"
        placeholder="BMR (Basal Metabolic Rate)"
        value={bmr}
        onChange={(e) => setBmr(e.target.value)}
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      />
      <select 
        onChange={(e) => setActivityLevel(activityMultipliers[e.target.value])}
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      >
        <option value="1.2">Sedentary</option>
        <option value="1.375">Lightly Active</option>
        <option value="1.55">Moderately Active</option>
        <option value="1.725">Active</option>
        <option value="1.9">Very Active</option>
      </select>
      <select 
        onChange={(e) => setGoal(e.target.value)}
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      >
        <option value="">Select Goal</option>
        <option value="lose">Lose Weight</option>
        <option value="gain">Gain Weight</option>
      </select>
      <div className="mt-4"> {/* Added margin-top to this div */}
        <button 
          onClick={calculateCaloriesNeeded} 
          className="bg-primary text-white py-2 px-4 rounded"
        >
          Calculate Calories Needed
        </button>
      </div>
      {caloriesNeeded && (
        <p className="mt-4">Calories Needed: {caloriesNeeded} kcal</p>
      )}
    </div>
  );
};

export default CalorieDeficitCalculator;
