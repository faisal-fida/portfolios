import React from 'react';

interface IconProps {
  path: string;
  height?: number;
  width?: number;
}

const CustomSVG: React.FC<IconProps> = ({ path, height = 20, width = 20 }) => {
  return (
    <svg viewBox="0 0 24 24" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <path d={path} />
    </svg>
  );
};

export default CustomSVG;
