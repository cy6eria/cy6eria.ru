import React from 'react';
import axios from 'axios';

import { Post } from './Post';

export class Posts extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            posts: [],
            isLoading: true,
            error: null
        }

        axios('/api/posts').then(resp => {
            this.setState({
                posts: resp.data.rows,
                isLoading: false
            });
        }).catch(error => {
            this.setState({
                error,
                isLoading: false
            });
        });
    }

    render () {
        const { posts, isLoading } = this.state;

        let view;

        if (isLoading) {
            view = (<h1>Загружаем...</h1>);
        } else if (posts.length === 0) {
            view = (<h1>Нечего показать.</h1>);
        } else {
            view = (<ul>{posts.map(post => <Post key={post.id} {...post} />)}</ul>);
        }

        return view;
    }
}