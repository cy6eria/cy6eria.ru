import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

import { format } from '../../core';

import './Post.scss';

const PostView = props => {
    const { id, picture, title, intro, createdAt } = props;

    return (
        <article className="post">
            <Link href={`/posts?id=${id}`} as={`/posts/${id}`} prefetch>
                <a>
                    <header className="post__header">
                        <h3>{title}</h3>
                    </header>

                    <time dateTime={createdAt} className="post__date">
                        {format(createdAt)}
                    </time>
                    
                    <ReactMarkdown source={intro} />

                    <img className="post__preview" src={picture} alt="Абстрактная картинка на тему статьи." />
                    </a>
            </Link>
        </article>
    );
}

export const Post = React.memo(PostView);
