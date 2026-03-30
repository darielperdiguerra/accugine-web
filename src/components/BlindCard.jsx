import React, { useState } from 'react';

export const BlindCard = ({ name, price, color }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [total, setTotal] = useState(0);

const handleCalculate = async () => {
  console.log("Sending to API:", { width, height, price }); // Check your values here!
  
  try {
    const response = await fetch('http://localhost:5281/api/blinds/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        width: Number(width), 
        height: Number(height), 
        pricePerSqMeter: Number(price) 
      })
    });

    const data = await response.json();
    console.log("API Response:", data); // This will show your validation message

    if (!response.ok) {
      alert("Error: " + data.message);
      return;
    }

    setTotal(data.totalPrice);
  } catch (err) {
    console.error("Connection failed:", err);
  }
};

return (
    <div className="border p-6 rounded-xl shadow-lg bg-white max-w-sm">
      {/* Updated Header Section */}
      <div className="flex justify-between items-start border-b pb-2 mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">{color}</p>
        </div>
        <div className="text-right">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            ₱{price}/sqm
          </span>
        </div>
      </div>

      {/* Your Calculation Inputs Below */}
      <div className="space-y-3">
        <div className="flex gap-2">
          <input 
            type="number" 
            placeholder="Width (m)" 
            onChange={(e) => setWidth(e.target.value)} 
            className="border p-2 rounded w-full text-sm"
          />
          <input 
            type="number" 
            placeholder="Height (m)" 
            onChange={(e) => setHeight(e.target.value)} 
            className="border p-2 rounded w-full text-sm"
          />
        </div>
        <button 
          onClick={handleCalculate} 
          className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Calculate Total
        </button>
      </div>

      {total > 0 && (
        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
          <p className="text-center text-green-800 font-bold">
            Estimated Total: ₱{total.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};