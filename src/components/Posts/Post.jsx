import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export class Post extends React.PureComponent {
    render () {
        const { id, title, intro } = this.props;

        return (
            <div>
                <h3>{title}</h3>
                <ReactMarkdown source={intro} />
                <div>
                    <Link to={`/blog/${id}`}>Подробнее...</Link>
                </div>
            </div>
        );
    }
}