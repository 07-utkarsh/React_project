import React, { useState } from 'react';

const TargetHeartRateCalculator = () => {
  const [age, setAge] = useState(''); // State for age
  const [restingHeartRate, setRestingHeartRate] = useState(''); // State for resting heart rate
  const [intensity, setIntensity] = useState(70); // State for intensity
  const [targetHeartRate, setTargetHeartRate] = useState(null); // State for calculated target heart rate

  const calculateTargetHeartRate = () => {
    // Ensure age and restingHeartRate are valid numbers
    const maxHeartRate = 220 - Number(age);
    const target = ((maxHeartRate - Number(restingHeartRate)) * (intensity / 100)) + Number(restingHeartRate);
    setTargetHeartRate(target.toFixed(2));
  };

  return (
    <div className="bg-black text-white p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Target Heart Rate Zone Calculator</h2>
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      />
      <input
        type="number"
        placeholder="Resting Heart Rate (bpm)"
        value={restingHeartRate}
        onChange={(e) => setRestingHeartRate(e.target.value)}
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      />
      <input
        type="number"
        placeholder="Intensity (%)"
        value={intensity}
        onChange={(e) => setIntensity(e.target.value)}
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      />
      <button onClick={calculateTargetHeartRate} className="bg-primary text-white py-2 px-4 rounded">
        Calculate Target Heart Rate
      </button>
      {targetHeartRate && (
        <p className="mt-4">Your Target Heart Rate: {targetHeartRate} bpm</p>
      )}
    </div>
  );
};

export default TargetHeartRateCalculator;
