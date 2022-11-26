import React from 'react';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Link from 'next/link';
import { format } from '../../core';
import { Post } from '../Post';
import { PostsLayout } from '../PostsLayout';
import styles from './PostDetails.module.scss';

const BackLink = () => (
  <Link href="/posts" className={styles.post_details__back_link}>
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
  </Link>
);

interface ReducedPost {
  _id: string;
  picture: string;
  title: string;
  intro: string;
  createdAt: string;
}

interface ExtendedPost extends ReducedPost {
  post: string;
}

interface PostDetailsProps {
  isFetching: boolean;
  currentPost: ExtendedPost,
  previousPost: ReducedPost,
  nextPost: ReducedPost,
}

export const PostDetails = (props: PostDetailsProps) => {
  const { isFetching, currentPost, previousPost, nextPost } = props;

  return (
    <PostsLayout isFetching={isFetching}>
      <BackLink />

      {currentPost && (
        <>
          <Head>
            <title>{currentPost.title} - Eugene Gundorov (cy6eria)</title>
            <meta name="description" content={currentPost.intro} />
            <meta property="og:title" content={`${currentPost.title} - Eugene Gundorov (cy6eria)`} />
            <meta property="og:description" content={currentPost.intro} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`https://cy6eria.ru/posts/${currentPost._id}`} />
            <meta property="og:image" content={currentPost.picture} />
          </Head>

          <header
            className={styles.post_details__header}
            style={{ backgroundImage: `url('${currentPost.picture}')` }}
          >
            <h1>{currentPost.title}</h1>

            <time dateTime={currentPost.createdAt} className={styles.post_details__date}>
              {format(currentPost.createdAt)}
            </time>
          </header>

          <div className={styles.post_details__content}>
            <section>
              <ReactMarkdown>{currentPost.intro}</ReactMarkdown>
            </section>

            <ReactMarkdown>{currentPost.post}</ReactMarkdown>
          </div>
        </>
      )}

      {(previousPost || nextPost) && (
        <div className={styles.post_details__read_more}>
          <h3>Возможно вам будет интересно:</h3>
          <div className={styles.post_details__read_more_items}>
            {previousPost && <Post {...previousPost} />}
            {nextPost && <Post {...nextPost} />}
          </div>
        </div>
      )}
    </PostsLayout>
  );
}
