import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Login as LoginView } from './Login';
import { login } from '../../actions'

const mapStateToProps = ({ app }) => ({
    
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    login
}, dispatch);

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginView); 
