import styles from './Loader.module.css';

export function Loader () {
  return (
    <div className={styles.loader}>
      <img src="/img/ryu_hadoken.gif" alt="Loading..." />
    </div>
  );
}
