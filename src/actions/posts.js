import axios from 'axios';

import {
    LOAD_POSTS_START,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE,
    IS_LOADING
} from '../actionTypes';

export const getPosts = (page = 1) => {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            isLoading: true
        });
        dispatch({
            type: LOAD_POSTS_START,
            page
        });
        
        return axios('/api/posts').then(resp => {
            dispatch({
                type: LOAD_POSTS_SUCCESS,
                posts: resp.data.rows
            });
            dispatch({
                type: IS_LOADING,
                isLoading: false
            });
        }).catch(err => {
            dispatch({
                type: LOAD_POSTS_FAILURE,
                error: {
                    text: 'Во время выполения запроса произошла ошибка.'
                }
            });
            dispatch({
                type: IS_LOADING,
                isLoading: false
            });
        });
    }
}
