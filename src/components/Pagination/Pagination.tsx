import React, { useMemo } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import styles from './Pagination.module.css';

interface PaginationProps {
  page: number;
  totalCount: number;
  itemsPerPage: number;
}

export const Pagination = (props: PaginationProps) => {
  const { page, totalCount, itemsPerPage } = props;

  const pages = useMemo(
    () => [...new Array(Math.ceil(totalCount/itemsPerPage))].map((_, i) => i + 1),
    [totalCount, itemsPerPage]
  );

  return (
    <div className={styles.Pagination}>
      {pages.map((i) => (
        <Link
          key={i}
          className={cx(styles['Pagination__link'], {
            [styles['Pagination__link--active']]: page === i, 
          })}
          href={`/posts?page=${i}`}
        >
          {i}
        </Link>
      ))}
    </div>    
  );
}
