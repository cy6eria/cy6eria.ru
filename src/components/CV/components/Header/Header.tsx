import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  name: string;
  position: string;
  summary: string;
  contacts: { type: string; value: string; }[];
}

export const Header = (props: HeaderProps) => {
  const { name, position, summary, contacts } = props;

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.position}>{position}</div>
      </div>
      <div>
        <div className={styles.avatar}
          role="img"
          aria-label="Mid-age person wit light hair in glasses"
        />
      </div>
      <div className={styles.summary}>{summary}</div>
        <ul className={styles.contacts}>
          {contacts.map((i) => (
            <li key={i.type}>
              <span className={`icon-${i.type}`} aria-label={i.type} /> {i.value}
            </li>
          ))}
        </ul>
    </header>
  );
}
