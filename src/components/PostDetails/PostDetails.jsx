import React from 'react';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Link from 'next/link';
import { format } from '../../core';
import { Navbar } from '../Navbar';
import { Post } from '../Post';
import styles from './PostDetails.module.scss';

const BackLink = React.memo(() => (
  <Link href="/posts">
    <a className={styles.post_details__back_link}>
      <svg
        width="32px"
        height="32px"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
      </svg>

      <span>Назад</span>
    </a>
  </Link>
));

const ReadMoreItems = props => {
  const { posts, postId } = props;
  const content = [];

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id != postId) {
      const { _id, title, intro, picture } = posts[i];

      content.push(
        <Post {...posts[i]} />
      );

      if (content.length === 2) {
        break;
      }
    }
  }

  return content;
}

export const PostDetails = props => {
  const { posts, postId } = props;
  const postDate = posts.find(item => item._id == props.postId);

  return (
    <article className={styles.post_details}>
      <BackLink />

      <Navbar className={styles.post_details__nav} />

      {postDate ? (
        <>
          <Head>
            <title>{postDate.title} - Eugene Gundorov (cy6eria)</title>
            <meta name="description" content={postDate.intro} />
            <meta property="og:title" content={`${postDate.title} - Eugene Gundorov (cy6eria)`} />
            <meta property="og:description" content={postDate.intro} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`https://cy6eria.ru/posts/${postDate._id}`} />
            <meta property="og:image" content={postDate.picture} />
          </Head>

          <header
            className={styles.post_details__header}
            style={{ backgroundImage: `url('${postDate.picture}')` }}
          >
            <h1>{postDate.title}</h1>

            <time dateTime={postDate.createdAt} className={styles.post_details__date}>
              {format(postDate.createdAt)}
            </time>
          </header>

          <div className={styles.post_details__content}>
            <section>
              <ReactMarkdown source={postDate.intro} />
            </section>

            <ReactMarkdown source={postDate.post} />
          </div>
        </>
      ) : (
        <div className={styles.post_details__not_found}>
          <h1 className={styles.post_details__404}>404</h1>
          <h3>Эта страница не найдена.</h3>
          <p>Но тут еще есть много других!</p>
        </div>
      )}

      <div className={styles.post_details__read_more}>
        <h3>Возможно вам будет интересно:</h3>
        <div className={styles.post_details__read_more_items}>
          <ReadMoreItems posts={posts} postId={postId} />
        </div>
      </div>
    </article>
  );
}
