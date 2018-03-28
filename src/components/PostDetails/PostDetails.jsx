import { connect } from 'react-redux';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet';

import { Link } from '../Link';

import { format } from '../../core';

import './PostDetails.scss';

class PostDetailsView extends React.PureComponent {
    render () {
        const { id, title, createdAt, intro, post, picture } = this.props;

        return (
            <article className="post_details">
                <Helmet>
                    <title>{title} - Eugene Gundorov (cy6eria)</title>
                    <meta name="description" content={intro} /> 
                    <meta property="og:title" content={`${title} - Eugene Gundorov (cy6eria)`} />
                    <meta property="og:description" content={intro} />
                    <meta property="og:type" content="article" />
                    <meta property="og:url" content={`https://cy6eria.ru/posts/${id}`} />
                    <meta property="og:image" content={picture} />
                </Helmet>

                <header style={{ backgroundImage: `url('${picture}')` }}>
                    <h1>{title}</h1>

                    <time dateTime={createdAt} className="post_details__date">
                        {format(createdAt)}
                    </time>
                </header>

                <div className="post_details__content">
                    <section>
                        <ReactMarkdown source={intro} />
                    </section>

                    <ReactMarkdown source={post} />
                </div>
            </article>
        );
    }
}

const mapStateToProps = ({ posts }) => {
    const { id, title, createdAt, intro, post, picture } = posts.postDetails;
    
    return { title, createdAt, intro, post, id, picture };
};

const mapDispatchToProps = (dispatch) => ({});

export const PostDetails = connect(mapStateToProps, mapDispatchToProps)(PostDetailsView); 
