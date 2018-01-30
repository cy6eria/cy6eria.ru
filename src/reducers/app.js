import { IS_LOADING } from '../actionTypes';

const initialState = {
    isLoading: false
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
        default: {
            nextState = state;
        }
    }

    return nextState
}