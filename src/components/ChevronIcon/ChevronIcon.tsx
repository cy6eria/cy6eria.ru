import React from 'react';
import cx from 'classnames';
import styles from './ChevronIcon.module.css';

interface ChevronIconProps {
  className?: string;
  align?: 'left' | 'right';
}

export const ChevronIcon = (props: ChevronIconProps) => {
  const { className, align } = props;

  return (
    <svg
      className={cx(styles.icon, className, {
        [styles['icon--right']]: align === 'right',
      })}
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
    </svg>
  );
}
