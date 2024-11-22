import React, { useState } from 'react';

const CalorieBurnCalculator = () => {
  const [weight, setWeight] = useState('');
  const [exerciseType, setExerciseType] = useState('Running');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState(null);

  const exerciseData = {
    Running: 10,  // calories burned per minute per kg
    Cycling: 8,
    Swimming: 7,
    Weightlifting: 6,
  };

  const calculateCaloriesBurned = () => {
    const calories = (exerciseData[exerciseType] * weight * duration).toFixed(2);
    setCaloriesBurned(calories);
  };

  return (
    <div className="bg-black text-white p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Calorie Burn Calculator</h2>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      />
      <select
        value={exerciseType}
        onChange={(e) => setExerciseType(e.target.value)}
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      >
        {Object.keys(exerciseData).map((exercise) => (
          <option key={exercise} value={exercise}>{exercise}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      />
      <button onClick={calculateCaloriesBurned} className="bg-primary text-white py-2 px-4 rounded">
        Calculate Calories Burned
      </button>
      {caloriesBurned && (
        <p className="mt-4">Calories Burned: {caloriesBurned} kcal</p>
      )}
    </div>
  );
};

export default CalorieBurnCalculator;
