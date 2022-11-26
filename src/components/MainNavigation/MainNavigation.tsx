import React from 'react';
import cx from 'classnames';
import Link from 'next/link';

import styles from './MainNavigation.module.css';

interface MainNavigationProps {
  className?: string;
}

export const MainNavigation = (props: MainNavigationProps) => {
  const { className } = props;
  return (
    <nav className={cx(styles.MainNavigation, className)}>
      <ul>
        <li><Link href="/">Главная</Link></li>
        <li><Link href="/posts">Блог</Link></li>
      </ul>
    </nav>
  );
}
