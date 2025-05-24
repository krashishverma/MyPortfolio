import React from 'react';
import * as AntIcons from '@ant-design/icons';

// This component safely renders Ant Design icons or falls back to a placeholder
const AntIcon = ({ name, ...props }) => {
  // Check if the icon exists in the library
  const IconComponent = AntIcons[name];
  
  if (IconComponent) {
    return <IconComponent {...props} />;
  }
  
  // Fallback to a simple placeholder or another icon
  console.warn(`Icon "${name}" not found in @ant-design/icons`);
  return <span className="anticon" {...props}>□</span>;
};

export default AntIcon;