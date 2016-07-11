import './Counter.scss';

import * as React from "react";

import Star from '../Star';
import { ITheme } from '../../interfaces/ITheme';
import { CounterState } from '../../CounterState';

interface ICounterProps {
    theme: ITheme
}

interface ICounterState {
    rate?: number,
    selectAll?: boolean
}

export default class Counter extends React.Component<ICounterProps, ICounterState> {
    constructor (props: ICounterProps) {
        super(props);
        
        this.state = {
            rate: CounterState.getRate(),
            selectAll: false
        }
    }
    
    componentDidMount (): void {
        CounterState.subscribe(this.onUpdate.bind(this))
    }

    componentWillUnmount (): void {
        CounterState.unsubscribe(this.onUpdate.bind(this))
    }

    onUpdate (rate: number): void {
        this.setState({rate})
    }
    
    renderStars () {
        const {theme} = this.props;
        const {rate, selectAll} = this.state;

        return [1,2,3,4,5].map((item) => {
            return (<Star theme={theme} rate={item} key={item} selected={selectAll || item <= rate}/>);
        })
    }

    selectAll (selectAll: boolean): void {
        this.setState({selectAll});
    }

    render () {
        return (
            <div
                className="counter"
                onMouseEnter={this.selectAll.bind(this, true)}
                onMouseLeave={this.selectAll.bind(this, false)}
            >
                {this.renderStars()}
            </div>
        );
    }
}