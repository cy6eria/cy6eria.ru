import React from 'react';
import PropTypes from 'prop-types';

export class Login extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    hadleSubmit = (e) => {
        const { username, password } = this.state;
        e.preventDefault();
        this.props.login(username, password);
    }

    renderForm = () => {
        const { username, password } = this.state;

        return (
            <form onSubmit={this.hadleSubmit}>
                <div>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">Войти</button>
            </form>
        );
    }

    render () {
        return this.props.isLoggedIn ? <div>Вы вошли!</div> : this.renderForm();
    }
}
