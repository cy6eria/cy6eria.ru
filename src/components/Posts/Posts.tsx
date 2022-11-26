import React from 'react';
import Head from 'next/head';
import { Post } from '../Post';
import { Navbar } from '../Navbar';
import { Pagination } from '../Pagination';
import style from './Posts.module.scss';

interface PostsProps {
  posts: Array<{
    _id: string;
    picture: string;
    title: string;
    intro: string;
    createdAt: string;
  }>;
  page: number;
  totalCount: number;
  itemsPerPage: number;
  error?: unknown;
}

export const Posts = (props: PostsProps) => {  
  const { posts, page, totalCount, itemsPerPage, error } = props;

  if (error) {
    console.log(error);
    return null;
  }

  let view = null;

  if (posts.length === 0) {
    view = (<h1>Нечего показать.</h1>);
  } else {
    view = posts.map(post => <Post key={post._id} {...post} />);
  }

  return (
    <>
      <Head>
        <title>Блог - Eugene Gundorov (cy6eria)</title>
        <meta name="description" content="Статьи на различную тематику связанные с программированием и робототехникой." />
        <meta property="og:title" content="Блог - Eugene Gundorov (cy6eria)" />
        <meta property="og:description" content="Статьи на различную тематику связанные с программированием и робототехникой." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://cy6eria.ru/posts" />
      </Head>
      <Navbar />
      <div className={style.posts}>
        {view}
      </div>
      {totalCount > posts.length && (
        <div className={style.pagination}>
          <Pagination page={page} totalCount={totalCount} itemsPerPage={itemsPerPage} />
        </div>
      )}
    </>
  );
}
