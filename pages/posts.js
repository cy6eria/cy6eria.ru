import React from 'react';

import { Posts } from '../src/components/Posts';
import { PostDetails } from '../src/components/PostDetails';

import { getPosts } from '../src/actions';

const PostsPage = props => {
    const { postId } = props;
    return postId ? <PostDetails {...props} /> : <Posts {...props} />
};

PostsPage.getInitialProps = async ({ store, query }) => {
    await store.dispatch(getPosts());

    const { posts } = store.getState();

    return {
        posts: posts.items,
        postId: query.id,
    };
}

export default PostsPage;
