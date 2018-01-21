import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Link } from '../Link';

export class PostDetails extends React.Component {
    render () {
        const { id, content } = this.props;

        return (
            <div>
                <div>
                    <Link href={`/posts/${id}/edit`}>Редактировать</Link>
                </div>
                <h3>{content.title}</h3>
                <ReactMarkdown source={content.intro} />
                <ReactMarkdown source={content.post} />
            </div>
        );
    }
}
