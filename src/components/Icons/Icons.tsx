import React from 'react';

interface IIconProps {
  color?: string;
}

export const BasketIcon: React.FC<IIconProps> = ({ color }) => {
  return (
    <svg width={30} height={30} viewBox='0 0 30 30' fill='none'>
      <path d='M6.887 23.5l1.77-17h13.724l1.771 17H6.887z' stroke='#000' />
      <path
        d='M18.707 10.5a3.375 3.375 0 11-6.75 0'
        stroke='#000'
        strokeLinecap='round'
      />
    </svg>
  );
};

export const FiltersIcon: React.FC<IIconProps> = ({ color }) => {
  return (
    <svg width={15} height={15} viewBox='0 0 15 15' fill='none'>
      <path
        d='M3.5 0v8.5m0 0a2 2 0 100 4m0-4a2 2 0 110 4m0 0V15m8-15v2.5m0 0a2 2 0 100 4m0-4a2 2 0 110 4m0 0V15'
        stroke='#000'
      />
    </svg>
  );
};

export const BackIcon: React.FC<IIconProps> = ({ color }) => {
  return (
    <svg width={23} height={23} viewBox='0 0 23 23' fill='none'>
      <path
        d='M11.62 1.105L.982 11.515l10.638 10.75'
        stroke={color ? color : null || '#000'}
        strokeLinecap='round'
      />
    </svg>
  );
};

export const MoreIcon: React.FC<IIconProps> = ({ color }) => {
  return (
    <svg
      width='17'
      height='3'
      viewBox='0 0 17 3'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='1.5' cy='1.5' r='1.5' fill='black' />
      <circle cx='8.5' cy='1.5' r='1.5' fill='black' />
      <circle cx='15.5' cy='1.5' r='1.5' fill='black' />
    </svg>
  );
};

export const ArrowNext: React.FC<IIconProps> = ({ color }) => {
  return (
    <svg
      width='8'
      height='13'
      viewBox='0 0 8 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1 1L7 6.5L1 12' stroke='#000' strokeLinecap='square' />
    </svg>
  );
};

export const SearchIcon: React.FC<IIconProps> = ({ color }) => {
  return (
    <svg
      width='21'
      height='19'
      viewBox='0 0 21 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='8.5' cy='8.5' r='8' stroke='black' />
      <path
        d='M19.6877 18.3904C19.9033 18.5629 20.2179 18.528 20.3904 18.3123C20.5629 18.0967 20.528 17.7821 20.3123 17.6096L19.6877 18.3904ZM14.6877 14.3904L19.6877 18.3904L20.3123 17.6096L15.3123 13.6096L14.6877 14.3904Z'
        fill='black'
      />
    </svg>
  );
};

interface iconProps {
  activeStatus?: boolean;
  color?: string;
}

export function Home({ activeStatus }: iconProps) {
  return (
    <svg
      fill='none'
      height='18'
      viewBox='0 0 19 18'
      width='19'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='m18 8.80042v8.69958h-17v-8.68341c0-.29498.13023-.57491.35586-.76491l7.71205-6.49436c.37997-.31997.93719-.31252 1.30849.01751l7.288 6.47818c.2135.18977.3356.46177.3356.74741z'
        stroke='#000'
      />
    </svg>
  );
}
export function Chat({ activeStatus }: iconProps) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='black'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M15.3334 17.9998L15.4902 17.5251L15.2722 17.4531L15.0755 17.5715L15.3334 17.9998ZM18 15.3332L17.5788 15.0637L17.45 15.265L17.5258 15.4917L18 15.3332ZM19.3334 19.321L19.1765 19.7957C19.3562 19.8551 19.554 19.8079 19.6876 19.6739C19.8211 19.5398 19.8675 19.3419 19.8075 19.1624L19.3334 19.321ZM15.0755 17.5715C13.7679 18.3587 11.6969 18.821 10 18.821V19.821C11.8258 19.821 14.0882 19.3332 15.5913 18.4282L15.0755 17.5715ZM10 18.821C5.12118 18.821 1.16669 14.8687 1.16669 9.99381H0.166687C0.166687 15.4216 4.56953 19.821 10 19.821V18.821ZM1.16669 9.99381C1.16669 5.11895 5.12119 1.1665 10 1.1665V0.166504C4.56951 0.166504 0.166687 4.56606 0.166687 9.99381H1.16669ZM10 1.1665C14.8788 1.1665 18.8334 5.11895 18.8334 9.99381H19.8334C19.8334 4.56606 15.4305 0.166504 10 0.166504V1.1665ZM18.8334 9.99381C18.8334 11.7866 18.436 13.724 17.5788 15.0637L18.4212 15.6026C19.4174 14.0456 19.8334 11.8972 19.8334 9.99381H18.8334ZM15.1765 18.4746L19.1765 19.7957L19.4902 18.8462L15.4902 17.5251L15.1765 18.4746ZM19.8075 19.1624L18.4742 15.1746L17.5258 15.4917L18.8592 19.4795L19.8075 19.1624Z' />
    </svg>
  );
}
export function Saved({ activeStatus, color }: iconProps) {
  return (
    <svg
      fill='none'
      width='19'
      height='20'
      viewBox='0 0 19 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.8114 1H2.85143C1.82944 1 1 1.73309 1 2.63636V19L9.33143 13.6L17.6629 19V2.63636C17.6629 1.73309 16.8334 1 15.8114 1Z'
        stroke={`${color || '#000'}`}
        strokeMiterlimit='10'
      />
    </svg>
  );
}
export function Add({ activeStatus, color }: iconProps) {
  return (
    <svg
      fill='none'
      height='34'
      viewBox='0 0 34 34'
      width='34'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect fill='#ffeef0' height='34' rx='17' width='34' />
      <g stroke={color ? color : '#ff441b'} strokeLinecap='round'>
        <path d='m16.9999 10v13.9997' />
        <path d='m10.0002 16.9995h13.9997' />
      </g>
    </svg>
  );
}
export function User({ activeStatus }: iconProps) {
  return (
    <svg
      fill='none'
      height='20'
      viewBox='0 0 17 20'
      width='17'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g
        clipRule='evenodd'
        fillRule='evenodd'
        stroke='#000'
        strokeLinecap='square'
      >
        <path d='m12.7 5.28571c0 2.36714-1.8802 4.28571-4.2 4.28571s-4.2-1.91857-4.2-4.28571 1.8802-4.28571 4.2-4.28571 4.2 1.91857 4.2 4.28571z' />
        <path d='m16.4 19.5h-15.4c0-1.015 0-1.9806 0-2.8551 0-2.3685 1.8804-4.2878 4.2-4.2878h7c2.3196 0 4.2 1.9193 4.2 4.2878z' />
      </g>
    </svg>
  );
}

export function IconStar({ activeStatus }: iconProps) {
  return (
    <svg
      width='10'
      height='10'
      viewBox='0 0 8 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.52447 0.463525C3.67415 0.00286961 4.32585 0.00286984 4.47553 0.463525L5.01031 2.10942C5.07725 2.31543 5.26923 2.45492 5.48584 2.45492H7.21644C7.7008 2.45492 7.90219 3.07472 7.51033 3.35942L6.11025 4.37664C5.93501 4.50397 5.86168 4.72965 5.92861 4.93566L6.4634 6.58156C6.61307 7.04222 6.08583 7.42528 5.69398 7.14058L4.29389 6.12336C4.11865 5.99603 3.88135 5.99603 3.70611 6.12336L2.30602 7.14058C1.91417 7.42528 1.38693 7.04222 1.5366 6.58156L2.07139 4.93566C2.13832 4.72965 2.06499 4.50397 1.88975 4.37664L0.489666 3.35942C0.0978096 3.07472 0.299197 2.45492 0.783559 2.45492H2.51416C2.73077 2.45492 2.92275 2.31543 2.98969 2.10942L3.52447 0.463525Z'
        fill='#CACFD4'
      />
    </svg>
  );
}

export function BanIcon({ activeStatus }: iconProps) {
  return (
    <svg
      width='23'
      height='23'
      viewBox='0 0 23 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.96219 4.51786L18.4265 18.9821M11.1943 21.875C5.60245 21.875 1.06934 17.3419 1.06934 11.75C1.06934 6.15812 5.60245 1.625 11.1943 1.625C16.7862 1.625 21.3193 6.15812 21.3193 11.75C21.3193 17.3419 16.7862 21.875 11.1943 21.875Z'
        stroke='black'
        strokeWidth='2'
      />
    </svg>
  );
}

export function SendIcon({ activeStatus }: iconProps) {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.9969 1.35083L21.914 1.74945C22.077 1.37443 21.9953 0.937954 21.7076 0.647338C21.4199 0.356722 20.9843 0.270528 20.6076 0.429698L20.9969 1.35083ZM1.86328 9.43629L1.47403 8.51515C1.12625 8.66212 0.890893 8.99243 0.865539 9.36913C0.840184 9.74584 1.02916 10.1047 1.3541 10.2969L1.86328 9.43629ZM8.69672 13.479L9.55099 12.9592C9.46567 12.819 9.34715 12.7019 9.20589 12.6184L8.69672 13.479ZM12.7968 20.2169L11.9425 20.7367C12.1367 21.0558 12.4924 21.2401 12.865 21.2146C13.2377 21.1891 13.565 20.958 13.7139 20.6155L12.7968 20.2169ZM20.6076 0.429698L1.47403 8.51515L2.25253 10.3574L21.3861 2.27196L20.6076 0.429698ZM1.3541 10.2969L8.18754 14.3397L9.20589 12.6184L2.37246 8.57562L1.3541 10.2969ZM7.84245 13.9988L11.9425 20.7367L13.651 19.6971L9.55099 12.9592L7.84245 13.9988ZM13.7139 20.6155L21.914 1.74945L20.0798 0.952207L11.8797 19.8183L13.7139 20.6155Z'
        fill='black'
      />
    </svg>
  );
}

export function TelegramIcon({ activeStatus }: iconProps) {
  return (
    <svg
      enableBackground='new 0 0 24 24'
      height='45'
      viewBox='0 0 24 24'
      width='45'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' fill='#039be5' r='12' />
      <path
        d='m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z'
        fill='#fff'
      />
    </svg>
  );
}

export function LikeIcon({ activeStatus }: iconProps) {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.8425 10.7074L15.1747 10.9749L15.4912 10.6891L16.2739 9.98245C18.2872 8.16464 21.393 8.32315 23.2108 10.3365C25.0273 12.3483 24.8703 15.451 22.8612 17.2694L15.0024 24.0256L7.57496 17.4674L7.56648 17.4599L7.55767 17.4528C5.44522 15.7512 5.11218 12.6593 6.8138 10.5469C8.51541 8.43441 11.6073 8.10136 13.7198 9.80298L14.8425 10.7074Z'
        stroke='white'
        strokeLinecap='round'
      />
    </svg>
  );
}

export function OthersIcon({ activeStatus }: iconProps) {
  return (
    <svg
      width='19'
      height='5'
      viewBox='0 0 19 5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='2.35742' cy='2.50024' r='2' fill='black' />
      <circle cx='9.35742' cy='2.49976' r='2' fill='black' />
      <circle cx='16.3574' cy='2.49976' r='2' fill='black' />
    </svg>
  );
}

export function CopyIcon({ activeStatus }: iconProps) {
  return (
    <svg
      width='17'
      height='18'
      viewBox='0 0 17 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.09998 7.86665L1.50553 11.4611C0.904377 12.0623 0.56665 12.8776 0.56665 13.7278C0.56665 15.4981 2.00182 16.9333 3.7722 16.9333C4.62237 16.9333 5.43771 16.5956 6.03887 15.9944L9.63332 12.4M11.9 10.1333L15.4944 6.53887C16.0956 5.93771 16.4333 5.12237 16.4333 4.2722C16.4333 2.50182 14.9981 1.06665 13.2278 1.06665C12.3776 1.06665 11.5623 1.40438 10.9611 2.00553L7.36665 5.59998M5.09998 12.4L11.9 5.59998'
        stroke='black'
      />
    </svg>
  );
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