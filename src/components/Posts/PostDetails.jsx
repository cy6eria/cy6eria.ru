import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

export class PostDetails extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            content: undefined,
            isLoading: true,
            error: null
        }

        axios(`/api/posts/${props.match.params.id}`).then(resp => {
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
                    <div>
                    <Link to={`/blog/${this.props.match.params.id}/edit`}>Редактировать</Link>
                    </div>
                    <h3>{content.title}</h3>
                    <ReactMarkdown source={content.intro} />
                    <ReactMarkdown source={content.post} />
                </div>
            );
        }

        return view;
    }
}
