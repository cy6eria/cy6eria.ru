import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import { Post } from './Post';

export class PostDetails extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            content: undefined,
            isLoading: true,
            error: null
        }

        console.log(props)

        axios(`/api/posts/${props.match.params.id}`).then(resp => {
            console.log(resp);
            this.setState({
                content: resp.data,
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
        const { content, isLoading } = this.state;

        let view;

        if (isLoading) {
            view = (<h1>Загружаем...</h1>);
        } else {
            view = (
                <div>
                    <h3>{content.title}</h3>
                    <ReactMarkdown source={content.intro} />
                    <ReactMarkdown source={content.post} />
                </div>
            );
        }

        return view;
    }
}