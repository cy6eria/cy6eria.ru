import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Link } from '../Link';

import { format } from '../../core';

import './Post.scss';

export class Post extends React.PureComponent {
    render () {
        const { id, title, intro, createdAt } = this.props;

        return (
            <section className="post">
                <div className="post__header">
                    <Link href={`/posts/${id}`}>
                        <h3>{title}</h3>
                    </Link>
                </div>

                <div className="post__date">
                    {format(createdAt)}
                </div>
                
                <ReactMarkdown source={intro} />
                
                <div className="post__read_more">
                    <Link href={`/posts/${id}`}>
                        Читать дальше →
                    </Link>
                </div>
            </section>
        );
    }
}