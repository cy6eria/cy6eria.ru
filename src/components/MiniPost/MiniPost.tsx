import React from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { format } from '@core';
import { ChevronIcon } from '../ChevronIcon'
import styles from './MiniPost.module.css';

interface MiniPostProps {
  _id: string;
  picture: string;
  title: string;
  createdAt: string;
  align?: 'left' | 'right';
}

export const MiniPost = (props: MiniPostProps) => {
  const { _id, title, createdAt, align } = props;

  return (
    <Link href={`/posts/${_id}`} className={cx(styles.wrap, {
      [styles['wrap--align-right']]: align === 'right',
    })}>
      <ChevronIcon className={styles.icon} align={align} />

      <h4 className={styles.header}>
        {title}
      </h4>
      
      <time dateTime={createdAt} className={styles.date}>
        {format(createdAt)}
      </time>
  </Link>
  );
}
