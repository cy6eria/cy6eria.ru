import React from 'react';
import axios from 'axios';

export class Form extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        this.setState({
            [key]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios({
            url: '/api/posts/new',
            method: 'post',
            data: this.state,
        }).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log(error);
        });
    }

    render () {
        const { title, intro } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" onChange={this.handleChange} />
                <textarea name="intro" cols="30" rows="10" onChange={this.handleChange} />
                <textarea name="post" cols="30" rows="10" onChange={this.handleChange} />
                <button type="submit">Создать</button>
            </form>
        );
    }
}
