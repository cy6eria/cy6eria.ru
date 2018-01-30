import { LOAD_POSTS_SUCCESS, LOAD_DETAILS_SUCCESS } from '../actionTypes';

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
        case LOAD_DETAILS_SUCCESS: {
            nextState = {
                ...state,
                postDetails: action.postDetails
            };
            break;
        }
        default: {
            nextState = state;
        }
    }

    return nextState
}
