import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPosts } from '../../actions'

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
                <ul className="posts__list">
                    {posts.map(post => <Post key={post.id} {...post} />)}
                </ul>
            );
        }

        return (
            <div className="posts">
                {view}
            </div>
        );
    }
}

const mapStateToProps = ({ posts }) => ({
    posts: posts.items
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPosts
}, dispatch);

export const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsView);
