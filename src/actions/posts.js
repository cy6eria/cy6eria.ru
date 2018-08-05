import { setIsLoadingState } from './app';
import { request } from '../core';

import {
    LOAD_POSTS_START,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE,
    LOAD_DETAILS_START,
    LOAD_DETAILS_SUCCESS,
    LOAD_DETAILS_FAILURE
} from '../actionTypes';

export const getPosts = (page = 1) => {
    return (dispatch) => {
        dispatch(setIsLoadingState(true));
        dispatch({
            type: LOAD_POSTS_START,
            page
        });
        
        return request.get('/api/posts').then(resp => {
            dispatch(setIsLoadingState(false));
            dispatch({
                type: LOAD_POSTS_SUCCESS,
                posts: resp.data.rows
            });
        }).catch(err => {
            dispatch(setIsLoadingState(false));
            dispatch({
                type: LOAD_POSTS_FAILURE,
                error: {
                    text: 'Во время выполения запроса произошла ошибка.'
                }
            });
        });
    }
}
