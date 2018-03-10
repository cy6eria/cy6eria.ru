import { connect } from 'react-redux';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Link } from '../Link';

import { format } from '../../core';

import './PostDetails.scss';

class PostDetailsView extends React.PureComponent {
    render () {
        const { title, createdAt, intro, post } = this.props;

        return (
            <article className="post_details">
                <h1>{title}</h1>

                <time dateTime={createdAt} className="post_details__date">
                    {format(createdAt)}
                </time>

                <section>
                    <ReactMarkdown source={intro} />
                </section>

                <ReactMarkdown source={post} />
            </article>
        );
    }
}

const mapStateToProps = ({ posts }) => {
    const { title, createdAt, intro, post } = posts.postDetails;
    
    return { title, createdAt, intro, post };
};

const mapDispatchToProps = (dispatch) => ({});

export const PostDetails = connect(mapStateToProps, mapDispatchToProps)(PostDetailsView); 
