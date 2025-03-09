import Image from 'next/image';

import styles from './Loader.module.css';

export function Loader () {
  return (
    <div className={styles.loader}>
      <Image src="/img/ryu_hadoken.gif" width={254} height={109} alt="Loading..." />
    </div>
  );
}
