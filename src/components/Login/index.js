import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Login as LoginView } from './Login';
import { login } from '../../actions/app'

const mapStateToProps = ({ app }) => ({
    isLoggedIn: app.isLoggedIn
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    login
}, dispatch);

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginView); 
