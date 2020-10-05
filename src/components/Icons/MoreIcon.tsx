import React from 'react';

interface IBackIconProps {
  color?: string;
}


const MoreIcon: React.FC<IBackIconProps> = ({ color }) => {
  return (
    <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="1.5" cy="1.5" r="1.5" fill="black" />
      <circle cx="8.5" cy="1.5" r="1.5" fill="black" />
      <circle cx="15.5" cy="1.5" r="1.5" fill="black" />
    </svg>
  );
}

export default MoreIcon;
