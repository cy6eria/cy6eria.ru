import { combineReducers } from 'redux'

import { posts } from './posts';
import { app } from './app';

export default combineReducers({
    app,
    posts
});
