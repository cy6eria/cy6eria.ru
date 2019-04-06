import React from 'react';
import { parse } from 'query-string';

import { Posts } from '../src/components/Posts';
import { PostDetails } from '../src/components/PostDetails';
import { Form } from '../src/components/Form';

import { getPosts } from '../src/actions';

const PostsPage = props => {
    const { postId, query, url, search } = props;

    switch (true) {
        case search.action === 'create': {
            return <Form />;
        }
        case postId && search.action === 'edit': {
            return <Form itemId={postId} />;
        }
        case !!postId: {
            return <PostDetails {...props} />;
        }
        default: {
            return <Posts {...props} />;
        }
    }
};

PostsPage.getInitialProps = async ({ asPath, store, query }) => {
    await store.dispatch(getPosts());

    const { posts } = store.getState();
    const search = asPath.split('?')[1];

    return {
        posts: posts.items,
        postId: query.id,
        search: search ? parse(search) : {},
    };
}

export default PostsPage;
