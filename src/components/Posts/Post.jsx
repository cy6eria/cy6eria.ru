import React from 'react';
import { Link } from 'react-router-dom';

export class Post extends React.PureComponent {
    render () {
        const { id, title, intro } = this.props;

        return (
            <div>
                <h3>{title}</h3>
                <div>{intro}</div>
                <div>
                    <Link to={`/posts/${id}`}>Подробнее...</Link>
                </div>
            </div>
        );
    }
}