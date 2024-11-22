import React, { useState } from 'react';

const WeightCalculator = () => {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateWeight = () => {
    // Placeholder calculation logic
    const idealWeight = (height - 100) + (age / 10);
    setResult(idealWeight.toFixed(2));
  };

  return (
    <div className="bg-black text-white p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Weight Calculator</h1>
      <input 
        type="number" 
        placeholder="Age (years)" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      />
      <input 
        type="number" 
        placeholder="Height (cm)" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      />
      <input 
        type="number" 
        placeholder="Current Weight (kg)" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      />
      <button onClick={calculateWeight} className="bg-primary text-white py-2 px-4 rounded">
        Calculate Ideal Weight
      </button>
      {result && <p className="mt-4">Your Ideal Weight is: {result} kg</p>}
    </div>
  );
};

export default WeightCalculator;
