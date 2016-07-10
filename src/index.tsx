import * as React from "react";
import * as ReactDOM from "react-dom";

import Counter from "./components/Counter";

let theme = {
    default: {
        start: '#717171',
        stop: '#d5d5d5'
    },
    selected: {
        start: '#ff6c00',
        stop: '#fff600'
    }
};

ReactDOM.render(<Counter theme={theme}/>, document.getElementById("app"));
