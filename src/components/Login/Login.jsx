import React from 'react';
import PropTypes from 'prop-types';

export class Login extends React.Component {
    hadleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    render () {
        return (
            <form onSubmit={this.hadleSubmit}>
                <div>
                    <input type="text" name="login" />
                </div>
                <div>
                    <input type="password" name="password" />
                </div>
                <button type="submit">Войти</button>
            </form>
        );
    }
}
