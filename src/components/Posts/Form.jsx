import React from 'react';
import axios from 'axios';

export class Form extends React.Component {
    constructor (props) {
        super(props);

        const itemId = props.match.params.id;

        this.state = {
            isLoading: !!itemId,
            itemId
        };

        if (itemId) {
            axios(`/api/posts/${itemId}`).then(resp => {
                this.setState({
                    title: resp.data.title,
                    intro: resp.data.intro,
                    post: resp.data.post,
                    isLoading: false
                });
            }).catch(error => {
                this.setState({
                    error,
                    isLoading: false
                });
            });
        }
    }

    handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        this.setState({
            [key]: value
        });
    }

    handleSubmit = (e) => {
        const { itemId } = this.state;
        e.preventDefault();

        axios({
            url: itemId ? `/api/posts/${itemId}` : '/api/posts/new',
            method: itemId ? 'put' : 'post',
            data: this.state,
        }).then(resp => {
            this.setState({
                title: resp.data.title,
                intro: resp.data.intro,
                post: resp.data.post,
                itemId: resp.data.id
            })
        }).catch(error => {
            console.log(error);
        });
    }

    render () {
        const { title, intro, post, isLoading, itemId } = this.state;

        let view;

        if (isLoading) {
            view = (
                <h1>Загружаем...</h1>
            );
        } else {
            view = (
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" value={title} onChange={this.handleChange} />
                    <textarea name="intro" value={intro} onChange={this.handleChange} />
                    <textarea name="post" value={post} onChange={this.handleChange} />
                    <button type="submit">{ !!itemId ? 'Обновить' : 'Создать'}</button>
                </form>
            );
        }

        return view;
    }
}
