import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { format } from '../../core';
import style from './Post.module.scss';

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
          <h3 className={style.post__header}>
            {title}
          </h3>

          <time dateTime={createdAt} className={style.post__date}>
            {format(createdAt)}
          </time>

          <ReactMarkdown source={intro} />

          <img
            className={style.post__preview}
            src={picture}
            alt="Абстрактная картинка на тему статьи."
          />
        </a>
      </Link>
    </article>
  );
});
