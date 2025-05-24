import React from 'react';
import CardLayout from './CardLayout';

const ImageAndParagraphSkeleton = ({ className = '' }) => {
  return (
    <CardLayout>
      <div className={`animate-pulse ${className}`}>
        {/* Image placeholder */}
        <div className="h-48 bg-slate-700 rounded mb-4"></div>
        
        {/* Title */}
        <div className="h-4 bg-slate-700 rounded w-3/4 mb-4"></div>
        
        {/* Content lines */}
        <div className="h-2 bg-slate-700 rounded w-full mt-2"></div>
        <div className="h-2 bg-slate-700 rounded w-5/6 mt-2"></div>
        <div className="h-2 bg-slate-700 rounded w-4/6 mt-2"></div>
      </div>
    </CardLayout>
  );
};

export default ImageAndParagraphSkeleton;
