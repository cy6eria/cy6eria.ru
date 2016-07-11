interface IRate {
    one: number,
    two: number,
    three: number,
    four: number,
    five: number
}

let rate: IRate = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0
};
let callbacks: Array<Function> = [];

try {
    let rateObj = JSON.parse(window.localStorage.getItem('rate'));

    if (rateObj && rateObj.one >= 0 && rateObj.two >= 0 && rateObj.three >= 0 && rateObj.four >= 0 && rateObj.five >= 0) {
        rate = rateObj;
    }
} catch (e) {
    throw new Error(e);
}

export namespace CounterState {
    export function getRate () {
        let a = rate['one'];
        let b = rate['two'];
        let c = rate['three'];
        let d = rate['four'];
        let e = rate['five'];

        let summOfRates = a+b+c+d+e;

        return summOfRates > 0 ? Math.round((1*a + 2*b + 3*c + 4*d + 5*e)/summOfRates) : 0;
    }

    export function subscribe (callback: Function): void {
        callbacks.push(callback);
    }

    export function unsubscribe (callback: Function): void {
        let idx = callbacks.indexOf(callback);
        callbacks.splice(idx, 1);
    }
    
    export function setRate (newRate: number): void {
        let keys: Array<string> = ['one', 'two', 'three', 'four', 'five'];
        let key: string = keys[newRate-1];

        rate[key] += 1;

        window.localStorage.setItem('rate', JSON.stringify(rate));

        callbacks.forEach(callback => callback(getRate()))
    }
}
