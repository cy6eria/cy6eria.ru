import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  name: string;
  position: string;
  contacts: { type: string; value: string; }[];
}

export const Header = (props: HeaderProps) => {
  const { name, position, contacts } = props;

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.position}>{position}</div>
        <ul className={styles.contacts}>
          {contacts.map((i) => <li key={i.type}><span className={`icon-${i.type}`} aria-label={i.type} /> {i.value}</li>)}
        </ul>
      </div>
      <div>
        <div className={styles.avatar}
          role="img"
          aria-label="Mid-age person wit light hair in glasses"
        />
      </div>
    </header>
  );
}
