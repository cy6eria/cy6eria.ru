import { connect } from 'react-redux';
import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet';

import { Link } from '../Link';

import { format } from '../../core';

import './PostDetails.scss';

class PostDetailsView extends React.PureComponent {
    renderBackLink = () => {
        return (
            <Link href="/posts" className="post_details__back_link">
                <svg
                    width="32px"
                    height="32px"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/>
                </svg>

                <span>Назад</span>
            </Link>
        );
    }

    render () {
        const { id, title, createdAt, intro, post, picture } = this.props;

        return (
            <article className="post_details">
                {this.renderBackLink()}

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
