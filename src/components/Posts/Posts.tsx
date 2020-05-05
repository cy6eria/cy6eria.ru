import React from 'react';
import Head from 'next/head';

import { Post } from '../Post';

import './Posts.scss';

export const Posts = (props) => {
  const { posts } = props;

  let view = null;

  if (posts.length === 0) {
    view = (<h1>Нечего показать.</h1>);
  } else {
    view = posts.map(post => <Post key={post._id} {...post} />);
  }

  return (
    <div className="posts">
      <Head>
        <title>Блог - Eugene Gundorov (cy6eria)</title>
        <meta name="description" content="Статьи на различную тематику связанные с программированием и робототехникой." />
        <meta property="og:title" content="Блог - Eugene Gundorov (cy6eria)" />
        <meta property="og:description" content="Статьи на различную тематику связанные с программированием и робототехникой." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://cy6eria.ru/posts" />
      </Head>
      {view}
    </div>
  );
}
