import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';

import { Post } from '../Post';

import './Posts.scss';

class PostsView extends React.Component {
    render () {
        const { posts } = this.props;

        let view;

        if (posts.length === 0) {
            view = (<h1>Нечего показать.</h1>);
        } else {
            view = (
                <Fragment>
                    {posts.map(post => <Post key={post.id} {...post} />)}
                </Fragment>
            );
        }

        return (
            <div className="posts">
                <Helmet>
                    <title>Блог - Eugene Gundorov (cy6eria)</title>
                    <meta name="description" content="Статьи на различную тематику связанные с программированием и робототехникой." /> 
                    <meta property="og:title" content="Блог - Eugene Gundorov (cy6eria)" />
                    <meta property="og:description" content="Статьи на различную тематику связанные с программированием и робототехникой." />
                    <meta property="og:type" content="article" />
                    <meta property="og:url" content="https://cy6eria.ru/posts" />
                </Helmet>
                {view}
            </div>
        );
    }
}

const mapStateToProps = ({ posts }) => ({
    posts: posts.items
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsView);
