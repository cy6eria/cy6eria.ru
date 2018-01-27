import React from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

import { Link } from '../Link';

import './PostDetails.scss';

export class PostDetails extends React.Component {
    render () {
        const { id, content } = this.props;

        return (
            <section className="post_details">
                <header>{content.title}</header>

                <div className="post_details__date">
                    {moment(content.createdAt).format('dddd, DD MMMM YYYY')}
                </div>

                <ReactMarkdown source={content.intro} />

                <ReactMarkdown source={content.post} />
            </section>
        );
    }
}
