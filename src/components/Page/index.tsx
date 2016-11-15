import * as React from 'react';

import './Page.scss';

import Sidebar from '../Sidebar';

export default class Page extends React.Component<any, any> {
    constructor (props) {
        super(props);

        this.state = {
            open: false
        }
    }

    handleToggle = (e) => {
        this.setState({
            open: !this.state.open
        })
        console.log(e)
    }

    render () {
        const {open} = this.state;

        return (
            <div className="page">
                <div className="content">{this.props.children}</div>
                <div className={`overlay ${open ? 'show' : ''}`}/>
                <Sidebar onToggle={this.handleToggle} open={open}/>
            </div>
        );
    }
}
