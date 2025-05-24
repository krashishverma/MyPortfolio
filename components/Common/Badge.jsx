import React from 'react';

const Badge = ({ title }) => {
  return (
    <div className="bg-DarkGray text-Snow text-xs px-2 py-1 rounded-md">
      {title}
    </div>
  );
};

export default Badge;
