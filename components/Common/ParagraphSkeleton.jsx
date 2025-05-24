import React from 'react';
import CardLayout from './CardLayout';

const ParagraphSkeleton = ({ className = '', lines = 5 }) => {
  return (
    <CardLayout>
      <div className={`animate-pulse ${className}`}>
        {/* Header */}
        <div className="h-4 bg-slate-700 rounded w-3/4 mb-4"></div>
        
        {/* Lines */}
        {[...Array(lines)].map((_, i) => (
          <div 
            key={i} 
            className={`h-2 bg-slate-700 rounded mt-2 ${i % 3 === 0 ? 'w-full' : i % 3 === 1 ? 'w-5/6' : 'w-4/6'}`}
          ></div>
        ))}
      </div>
    </CardLayout>
  );
};

export default ParagraphSkeleton;
