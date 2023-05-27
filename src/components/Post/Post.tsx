import React from 'react';
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

export const Post = (props: IProps) => {
  const { _id, picture, title, intro, createdAt } = props;

  return (
    <article className={style.post}>
      <Link href={`/posts/${_id}`}>
        <header
          className={style.post__picture}
          style={{ backgroundImage: `url(${picture})` }}
        >
          <div className={style.post__title}>
            <h4 className={style.post__header}>{title}</h4>
            <time dateTime={createdAt} className={style.post__date}>
              {format(createdAt)}
            </time>
          </div>
        </header>

        <div className={style.post__content}>
          <ReactMarkdown>{intro}</ReactMarkdown>
        </div>
      </Link>
    </article>
  );
}
