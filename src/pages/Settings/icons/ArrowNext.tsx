import React from 'react';

interface ArrowNextProps {
  color?: string
}

const ArrowNext = ({color} : ArrowNextProps) => {
  return (
    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
      d="M1 1L7 6.5L1 12" 
      stroke="#7D8793"
      strokeLinecap="square"/>
    </svg>
  )
}

export default ArrowNext;