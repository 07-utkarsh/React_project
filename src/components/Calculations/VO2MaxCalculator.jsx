import React, { useState } from 'react';

const VO2MaxCalculator = () => {
  const [time, setTime] = useState('');
  const [distance, setDistance] = useState('');
  const [vo2Max, setVo2Max] = useState(null);

  const calculateVO2Max = () => {
    // Formula: VO2 Max = (distance in meters - 504.9) / 44.73
    const distanceInMeters = distance * 1000; // Convert km to meters
    const vo2MaxValue = ((distanceInMeters - 504.9) / 44.73).toFixed(2);
    setVo2Max(vo2MaxValue);
  };

  return (
    <div className="bg-black text-white p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">VO2 Max Calculator</h2>
      <input
        type="number"
        placeholder="Time (minutes)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      />
      <input
        type="number"
        placeholder="Distance (km)"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        className="p-2 mb-4 bg-gray-900 text-white rounded"
      />
      <div className="mt-4"> {/* Added margin-top to this div */}
        <button
          onClick={calculateVO2Max}
          className="bg-primary text-white py-2 px-4 rounded"
        >
          Calculate VO2 Max
        </button>
      </div>
      {vo2Max && (
        <div className="mt-4">
          <h3>Your VO2 Max: {vo2Max} ml/kg/min</h3>
        </div>
      )}
    </div>
  );
};

export default VO2MaxCalculator;
