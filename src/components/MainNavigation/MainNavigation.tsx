import React, { FC } from 'react';
import cx from 'classnames';
import Link from 'next/link';

import styles from './MainNavigation.module.css';

interface IProps {
  className?: string;
}

export const MainNavigation: FC<IProps> = React.memo((props) => {
  const { className } = props;
  return (
    <nav className={cx(styles.MainNavigation, className)}>
      <ul>
        <li><Link href="/"><a>Главная</a></Link></li>
        <li><Link href="/posts"><a>Блог</a></Link></li>
      </ul>
    </nav>
  );
});
