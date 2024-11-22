import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const bmiValue = weight / ((height / 100) ** 2);
    setBmi(bmiValue.toFixed(2));
  };

  return (
    <div className="bg-black text-white p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">BMI Calculator</h1>
      <input 
        type="number" 
        placeholder="Weight (kg)" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      />
      <input 
        type="number" 
        placeholder="Height (cm)" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      />
      <div className="mt-4"> {/* Added margin-top to create space */}
        <button 
          onClick={calculateBMI} 
          className="bg-primary text-white py-2 px-4 rounded"
        >
          Calculate BMI
        </button>
      </div>
      {bmi && <p className="mt-4">Your BMI is: {bmi}</p>}
    </div>
  );
};

export default BMICalculator;
