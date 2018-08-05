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
                <Link href={`/posts/${id}`}>
                    <header className="post__header">
                        <h3>{title}</h3>
                    </header>

                    <time dateTime={createdAt} className="post__date">
                        {format(createdAt)}
                    </time>
                    
                    <ReactMarkdown source={intro} />

                    <img className="post__preview" src={picture} alt="Абстрактная картинка на тему статьи." />
                </Link>
            </article>
        );
    }
}
