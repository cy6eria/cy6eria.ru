import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Link } from '../Link';

import { format } from '../../core';

import './Post.scss';

export class Post extends React.PureComponent {
    render () {
        const { id, picture, title, intro, createdAt } = this.props;

        return (
            <article className="post">
                <header className="post__header">
                    <Link href={`/posts/${id}`}>
                        <h3>{title}</h3>
                    </Link>
                </header>

                <time dateTime={createdAt} className="post__date">
                    {format(createdAt)}
                </time>
                
                <ReactMarkdown source={intro} />

                <img className="post__preview" src={picture} alt="Абстрактная картинка на тему статьи." />
            </article>
        );
    }
}
