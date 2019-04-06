import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import './Login.scss';

export const Login = props => {
    const [state, setState] = useState({
        username: '',
        password: ''
    });

    const { username, password } = state;
    const { isLoggedIn, login } = props;

    const handleChange = useCallback((e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }, [state]);

    const hadleSubmit = useCallback((e) => {
        e.preventDefault();
        login(username, password);
    }, [state]);

    return isLoggedIn ? <div>Вы вошли!</div> : (
        <form className="login" onSubmit={hadleSubmit}>
            <div className="login__row">
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
            </div>
            <div className="login__row">
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Войти</button>
        </form>
    );
}
