import { LOAD_POSTS_SUCCESS } from '../actionTypes';

const initialState = {
    items: [],
};

export const posts = (state = initialState, action) => {
    let nextState;

    switch (action.type) {
        case LOAD_POSTS_SUCCESS: {
            nextState = {
                ...state,
                items: action.posts
            };
            break;
        }
        default: {
            nextState = state;
        }
    }

    return nextState
}
