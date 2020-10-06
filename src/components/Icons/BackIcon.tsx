import React from 'react';

interface IBackIconProps {
  color?: string;
}

const BackIcon: React.FC<IBackIconProps> = ({ color }) => {
  return (
    <svg width={23} height={23} viewBox='0 0 23 23' fill='none'>
      <path
        d='M11.62 1.105L.982 11.515l10.638 10.75'
        stroke={(color) ? color : null || '#000'}
        strokeLinecap='round'
      />
    </svg>
  );
}

export default BackIcon;
