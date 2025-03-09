import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';
import { MainNavigation } from '../MainNavigation';
import styles from './Navbar.module.css';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
    <div className={cx(styles.Navbar, className)}>
      <div className={styles.Navbar__author}>
        <Link className="flex align-center" href="/">
          <Image
            className={styles.Navbar__avatar}
            src="https://res.cloudinary.com/cy6eria/image/upload/ar_1:1,bo_1px_solid_rgb:ffffff,c_fill,g_face,r_max,w_100,x_0,z_0.1/a_0/v1588699467/IMG_1683.jpg"
            alt="Парень в очках"
            width={102}
            height={102}
          />
          <div className={styles.Navbar__title}>
            <div className={styles.Navbar__highlighted}>Евгений Гундоров</div>
            <div>front-end</div>
          </div>
        </Link>
      </div>
      <MainNavigation className={styles.Navbar__nav} />
    </div>
  );
}
