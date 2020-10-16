import React from 'react';
// import { inspect } from "util";
import styles from './Components.module.scss'
import {LoadingIcon} from "./Icons/Icons";


interface ButtonInterface {
  children?: string;
  disabled?: boolean;
  bcgColor?: string;
  fontColor?: string;
  onClick?: () => void;
  loading?: boolean;
}

export const Button: React.FC<ButtonInterface> = ({
                                                    disabled,
                                                    bcgColor = "black",
                                                    fontColor = "white",
                                                    onClick,
                                                    children,
                                                    loading
                                                  }) => {


  return (
    <button
      className={styles['Button']}
      disabled={loading || disabled} onClick={onClick}
      style={{
        backgroundColor: bcgColor,
        color: fontColor,
        cursor: disabled ? "not-allowed" : loading ? 'wait' : 'pointer',
        opacity: disabled || loading ? '0.75' : 1
      }}>
       <span className={`${styles['Button-loading']} ${loading && styles['active']}`}>
         {loading && <LoadingIcon color={fontColor}/>}
       </span>
      {children}
    </button>
  );
}
