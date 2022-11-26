import React from 'react';
import Link from 'next/link';
import styles from './ErrorPageContent.module.css';

interface ErrorPageContentProps {
  img?: string;
  code: number;
  title: string;
  message: string;
  target: string;
  targetLabel: string;
}

export const ErrorPageContent = (props: ErrorPageContentProps) => {
  const { img, code, title, message, target, targetLabel } = props;

  return (
    <div className={styles.error_page_content}>
      {img && <img src={img} />}
      <h1 className={styles.code}>{code}</h1>
      <h3 className={styles.error}>{title}</h3>
      <p className={styles.description}>{message}</p>
      <p>
        <Link className={styles.link} href={target}>{targetLabel}</Link>
      </p>
    </div>
  );
}
