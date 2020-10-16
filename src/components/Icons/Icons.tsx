import React from 'react';

interface IIconProps {
  color?: string;
}

export const BasketIcon: React.FC<IIconProps> = ({ color }) => {
  return (
    <svg width={30} height={30} viewBox="0 0 30 30" fill="none">
      <path d="M6.887 23.5l1.77-17h13.724l1.771 17H6.887z" stroke="#000" />
      <path
        d="M18.707 10.5a3.375 3.375 0 11-6.75 0"
        stroke="#000"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const FiltersIcon: React.FC<IIconProps> = ({ color }) => {
  return (
    <svg width={15} height={15} viewBox="0 0 15 15" fill="none">
      <path
        d="M3.5 0v8.5m0 0a2 2 0 100 4m0-4a2 2 0 110 4m0 0V15m8-15v2.5m0 0a2 2 0 100 4m0-4a2 2 0 110 4m0 0V15"
        stroke="#000"
      />
    </svg>
  );
}

export const BackIcon: React.FC<IIconProps> = ({ color }) => {
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

export const MoreIcon: React.FC<IIconProps> = ({ color }) => {
  return (
    <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="1.5" cy="1.5" r="1.5" fill="black" />
      <circle cx="8.5" cy="1.5" r="1.5" fill="black" />
      <circle cx="15.5" cy="1.5" r="1.5" fill="black" />
    </svg>
  );
}

export const ArrowNext: React.FC<IIconProps> = ({ color }) => {
  return (
    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1L7 6.5L1 12"
        stroke="#7D8793"
        strokeLinecap="square" />
    </svg>
  )
}

interface iconProps {
  activeStatus?: boolean;
  color?: string;
}

export function Home({ activeStatus }: iconProps) {
  return (
    <svg fill="none" height="18" viewBox="0 0 19 18" width="19" xmlns="http://www.w3.org/2000/svg"><path d="m18 8.80042v8.69958h-17v-8.68341c0-.29498.13023-.57491.35586-.76491l7.71205-6.49436c.37997-.31997.93719-.31252 1.30849.01751l7.288 6.47818c.2135.18977.3356.46177.3356.74741z" stroke="#000" /></svg>
  )


}
export function Chat({ activeStatus }: iconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.3334 17.9998L15.4902 17.5251L15.2722 17.4531L15.0755 17.5715L15.3334 17.9998ZM18 15.3332L17.5788 15.0637L17.45 15.265L17.5258 15.4917L18 15.3332ZM19.3334 19.321L19.1765 19.7957C19.3562 19.8551 19.554 19.8079 19.6876 19.6739C19.8211 19.5398 19.8675 19.3419 19.8075 19.1624L19.3334 19.321ZM15.0755 17.5715C13.7679 18.3587 11.6969 18.821 10 18.821V19.821C11.8258 19.821 14.0882 19.3332 15.5913 18.4282L15.0755 17.5715ZM10 18.821C5.12118 18.821 1.16669 14.8687 1.16669 9.99381H0.166687C0.166687 15.4216 4.56953 19.821 10 19.821V18.821ZM1.16669 9.99381C1.16669 5.11895 5.12119 1.1665 10 1.1665V0.166504C4.56951 0.166504 0.166687 4.56606 0.166687 9.99381H1.16669ZM10 1.1665C14.8788 1.1665 18.8334 5.11895 18.8334 9.99381H19.8334C19.8334 4.56606 15.4305 0.166504 10 0.166504V1.1665ZM18.8334 9.99381C18.8334 11.7866 18.436 13.724 17.5788 15.0637L18.4212 15.6026C19.4174 14.0456 19.8334 11.8972 19.8334 9.99381H18.8334ZM15.1765 18.4746L19.1765 19.7957L19.4902 18.8462L15.4902 17.5251L15.1765 18.4746ZM19.8075 19.1624L18.4742 15.1746L17.5258 15.4917L18.8592 19.4795L19.8075 19.1624Z" />
    </svg>
  )

}
export function Saved({ activeStatus }: iconProps) {
  return (
    <svg fill="none" width="19" height="20" viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8114 1H2.85143C1.82944 1 1 1.73309 1 2.63636V19L9.33143 13.6L17.6629 19V2.63636C17.6629 1.73309 16.8334 1 15.8114 1Z" stroke="black" strokeMiterlimit="10" />
    </svg>
  )

}
export function Add({ activeStatus, color }: iconProps) {
  return (
    <svg fill="none" height="34" viewBox="0 0 34 34" width="34" xmlns="http://www.w3.org/2000/svg"><rect fill="#ffeef0" height="34" rx="17" width="34" /><g stroke={(color) ? color : "#ff441b"} strokeLinecap="round"><path d="m16.9999 10v13.9997" /><path d="m10.0002 16.9995h13.9997" /></g></svg>
  )

}
export function User({ activeStatus }: iconProps) {

  return (
    <svg fill="none" height="20" viewBox="0 0 17 20" width="17" xmlns="http://www.w3.org/2000/svg"><g clipRule="evenodd" fillRule="evenodd" stroke="#000" strokeLinecap="square"><path d="m12.7 5.28571c0 2.36714-1.8802 4.28571-4.2 4.28571s-4.2-1.91857-4.2-4.28571 1.8802-4.28571 4.2-4.28571 4.2 1.91857 4.2 4.28571z" /><path d="m16.4 19.5h-15.4c0-1.015 0-1.9806 0-2.8551 0-2.3685 1.8804-4.2878 4.2-4.2878h7c2.3196 0 4.2 1.9193 4.2 4.2878z" /></g></svg>
  )
}

export function LoadingIcon({color = '#FF441B'}: iconProps) {
  return (
    <svg
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
    >
      <circle
        cx={50}
        cy={50}
        fill='none'
        stroke={color}
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