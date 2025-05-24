import React from 'react';

const LinearProgress = ({ percent, strokeColor = "#1fdf64", height = 8 }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full" style={{ height: `${height}px` }}>
      <div 
        className="rounded-full" 
        style={{ 
          width: `${percent}%`, 
          height: '100%', 
          backgroundColor: strokeColor 
        }}
      ></div>
    </div>
  );
};

export default LinearProgress;