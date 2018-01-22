import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPosts } from '../../actions'

import { Post } from './Post';

class PostsView extends React.Component {
    render () {
        const { posts } = this.props;

        let view;

        if (posts.length === 0) {
            view = (<h1>Нечего показать.</h1>);
        } else {
            view = (<ul>{posts.map(post => <Post key={post.id} {...post} />)}</ul>);
        }

        return view;
    }
}

const mapStateToProps = ({ posts }) => ({
    posts: posts.items
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPosts
}, dispatch);

export const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsView);
