import React, { useEffect, useState } from 'react';
import { BlindCard } from "../components/BlindCard";

export const BlindsGallery = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 5xxx with your actual C# Port from Step 2
    fetch('http://localhost:5281/api/blinds')
      .then(res => {
        if (!res.ok) throw new Error("Failed to reach the Brain (API)");
        return res.json();
      })
      .then(data => setItems(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (items.length === 0) return <div>Loading your blinds...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {items.map(item => (
        <BlindCard 
          key={item.id} 
          name={item.materialName} 
          price={item.pricePerSqMeter} 
          color={item.color} 
        />
      ))}
    </div>
  );
};