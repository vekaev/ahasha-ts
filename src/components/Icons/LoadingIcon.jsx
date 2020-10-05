import * as React from 'react';

function LoadingIcon(props) {
  return (
    <svg
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      style={props.style}
    >
      <circle
        cx={50}
        cy={50}
        fill='none'
        stroke={props.color || '#fff'}
        strokeWidth={8}
        r={46}
        strokeDasharray='216.76989309769573 74.25663103256524'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1s'
          values='0 50 50;360 50 50'
          keyTimes='0;1'
        />
      </circle>
    </svg>
  );
}

export default LoadingIcon;
