import React from 'react';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Link from 'next/link';
import { format } from '@core';
import { ChevronIcon } from '../ChevronIcon'
import { PostsLayout } from '../PostsLayout';
import { MiniPost } from '../MiniPost';
import styles from './PostDetails.module.scss';

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
      <Link href="/posts" className={styles.post_details__back_link}>
        <ChevronIcon />

        <span>Назад</span>
      </Link>

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
          {nextPost ? <MiniPost {...nextPost} /> : <div />}
          {previousPost ? <MiniPost {...previousPost} align="right" /> : <div />}
        </div>
      )}
    </PostsLayout>
  );
}
