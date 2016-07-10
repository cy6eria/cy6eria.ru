import './Counter.scss';

import * as React from "react";

import Star from '../Star';

export default class Counter extends React.Component<void, void> {
    render() {
        return (
            <div className="counter">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
        );
    }
}