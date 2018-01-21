import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Link } from '../Link';

export class Post extends React.PureComponent {
    render () {
        const { id, title, intro } = this.props;

        return (
            <div>
                <Link href={`/posts/${id}`}>
                    <h3>{title}</h3>
                </Link>
                
                <ReactMarkdown source={intro} />
                
                <div>
                    <Link href={`/posts/${id}`}>Подробнее...</Link>
                </div>
            </div>
        );
    }
}