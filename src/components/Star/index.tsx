import './Star.scss';

import * as React from "react";

import {ITheme} from '../../interfaces/ITheme';

interface IPropsStar {
    theme: ITheme
}

export default function Star (props: IPropsStar) {
    const {theme} = props;
    return (
        <div className="star" >
            <svg viewBox="0 0 510 480">
                <defs>
                    <linearGradient id="default" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" style={{stopColor: theme.default.start}} />
                        <stop offset="100%" style={{stopColor: theme.default.stop}} />
                    </linearGradient>

                    <linearGradient id="selected" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" style={{stopColor: theme.selected.start}} />
                        <stop offset="100%" style={{stopColor: theme.selected.stop}} />
                    </linearGradient>
                </defs>

                <path
                    d="m324.38185,182.844027l183.388149,0l-148.544401,113.395005l61.129383,181.554268l-164.743687,-106.97642l-164.743687,106.97642l51.959976,-181.554268l-140.597581,-113.395005l183.388149,0l68.464909,-180.637327l70.29879,180.637327z"
                />
            </svg>
        </div>
    )    
}
