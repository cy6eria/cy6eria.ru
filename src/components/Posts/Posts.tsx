import React from 'react';
import type { ReactNode } from 'react';
import { Post } from '../Post';
import { Pagination } from '../Pagination';
import style from './Posts.module.css';

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
}

export const Posts = (props: PostsProps) => {  
  const { posts, page, totalCount, itemsPerPage } = props;

  let view: ReactNode = null;

  if (posts.length === 0) {
    view = (<h1>Нечего показать.</h1>);
  } else {
    view = posts.map(post => <Post key={post._id} {...post} />);
  }

  return (
    <>
      <div className={style.posts}>{view}</div>

      {totalCount > posts.length && (
        <div className={style.pagination}>
          <Pagination page={page} totalCount={totalCount} itemsPerPage={itemsPerPage} />
        </div>
      )}
    </>
  );
}
