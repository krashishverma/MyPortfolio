import React from 'react'
import CardLayout from './CardLayout'

// A simple skeleton component that doesn't rely on Ant Design
const SimpleSkeleton = ({ className, lines = 7 }) => {
  return (
    <CardLayout>
      <div className={`animate-pulse ${className}`}>
        {[...Array(lines)].map((_, i) => (
          <div key={i} className="h-2 bg-slate-700 rounded mt-2"></div>
        ))}
      </div>
    </CardLayout>
  )
}

export default SimpleSkeleton