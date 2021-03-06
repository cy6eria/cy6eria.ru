import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { format } from '../../core';
import style from './Post.module.css';

interface IProps {
  _id: string;
  picture: string;
  title: string;
  intro: string;
  createdAt: string;
}

export const Post: FC<IProps> = React.memo((props) => {
  const { _id, picture, title, intro, createdAt } = props;

  return (
    <article className={style.post}>
      <Link href="/posts/[id]" as={`/posts/${_id}`}>
        <a>
          <header
            className={style.post__picture}
            style={{ backgroundImage: `url(${picture})` }}
          >
            <h4 className={style.post__header}>{title}</h4>
            <time dateTime={createdAt} className={style.post__date}>
              {format(createdAt)}
            </time>
          </header>

          <ReactMarkdown source={intro} />
        </a>
      </Link>
    </article>
  );
});
