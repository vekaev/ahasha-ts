import React from 'react';
import {inspect} from "util";
import styles from './Components.module.scss'


interface ButtonInterface {
  title: string
  disabled?: boolean;
  bcgColor?: string;
  fontColor?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonInterface> = ({
                                                    disabled,
                                                    bcgColor,
                                                    fontColor,
                                                    onClick,
                                                    title
                                                  }) => {
  return (
    <button
      className={styles['Button']}
      disabled={disabled} onClick={onClick}
      style={{
        backgroundColor: bcgColor ? bcgColor : "black",
        color: fontColor ? fontColor : "white"
      }}>
      {title}
    </button>
  );
}
