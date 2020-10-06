import React, { ReactChild } from 'react';
import styles from './Header.module.scss';
import joinClass from '../../utils/join';

export interface IHeaderProps {
  left?: ReactChild;
  right?: ReactChild;
  middle?: ReactChild;
  className?: string;
  classNameLeft?: string;
  classNameRight?: string;
  classNameMiddle?: string;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  onClickMiddle?: () => void;
}

const Header: React.FC<IHeaderProps> = ({
  left,
  right,
  middle,
  className,
  classNameLeft,
  classNameRight,
  classNameMiddle,
  onClickLeft,
  onClickRight,
  onClickMiddle,
}) => {
  return (
    <div className={joinClass(styles.header, className || '')}>
      <div className={joinClass(styles['header-left'], classNameLeft || '')}>
        {<div
          className={styles['header-left-content']}
          onClick={onClickLeft}
        >
          {left}
        </div>
        }
      </div>
      <div className={joinClass(styles['header-middle'], classNameMiddle || '')}>
        {<div
          className={styles['header-middle-content']}
          onClick={onClickMiddle}
        >
          {middle}
        </div>
        }
      </div>
      <div className={joinClass(styles['header-right'], classNameRight || '')}>
        {<div
          className={styles['header-right-content']}
          onClick={onClickRight}
        >
          {right}
        </div>
        }
      </div>
    </div>
  );
}

export default Header;
