import { IS_LOADING, LOGIN_SUCCESS } from '../actionTypes';

const initialState = {
    isLoading: false,
    isLoggedIn: false
}

export const app = (state = initialState, action) => {
    let nextState;

    switch (action.type) {
        case IS_LOADING: {
            nextState = {
                ...state,
                isLoading: action.isLoading
            };
            break;
        }
        case LOGIN_SUCCESS: {
            nextState = {
                ...state,
                isLoading: false,
                isLoggedIn: true
            };
            break;
        }
        default: {
            nextState = state;
        }
    }

    return nextState
}