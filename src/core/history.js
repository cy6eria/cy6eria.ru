import createHistory from 'history/createBrowserHistory';

export const history = typeof(window) !== 'undefined' ? createHistory() : {};
