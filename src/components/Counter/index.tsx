import './Counter.scss';

import * as React from "react";

import Star from '../Star';
import {ITheme} from '../../interfaces/ITheme';

interface ICounterProps {
    theme: ITheme
}

export default class Counter extends React.Component<ICounterProps, void> {
    render() {
        const {theme} = this.props;
        
        return (
            <div className="counter">
                <Star theme={theme}/>
                <Star theme={theme}/>
                <Star theme={theme}/>
                <Star theme={theme}/>
                <Star theme={theme}/>
            </div>
        );
    }
}