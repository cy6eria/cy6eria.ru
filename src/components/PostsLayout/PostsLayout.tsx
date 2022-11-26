import type { PropsWithChildren } from 'react';
import cx from 'classnames';
import { Navbar } from '../Navbar';
import styles from './PostsLayout.module.css';

interface PostsLayoutProps {
  isFetching?: boolean;
}

export const PostsLayout = (props: PropsWithChildren<PostsLayoutProps>) => {
  const { isFetching, children } = props;

  return (
    <>
      <Navbar />

      <div className={cx(styles.layout, {
        [styles['layout--fetching']]: isFetching,
      })}>
        {children}
      </div>   
    </>
  );
}
