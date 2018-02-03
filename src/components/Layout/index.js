import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Layout as LayoutView } from './Layout';

const mapStateToProps = ({ app }) => ({
    isLoading: app.isLoading
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export const Layout = connect(mapStateToProps, mapDispatchToProps)(LayoutView); 
