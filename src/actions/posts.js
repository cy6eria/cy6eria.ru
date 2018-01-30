import { request } from '../core';

import { setIsLoadingState } from './';

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
        
        return request('/api/posts').then(resp => {
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

export const getPost = (postId) => {
    return (dispatch) => {
        if (postId) {
            dispatch(setIsLoadingState(true));
            dispatch({ type: LOAD_DETAILS_START });
            
            return request(`/api/posts/${postId}`).then(resp => {
                dispatch(setIsLoadingState(false));
                dispatch({
                    type: LOAD_DETAILS_SUCCESS,
                    postDetails: resp.data
                });
            }).catch(err => {
                dispatch(setIsLoadingState(false));
                dispatch({
                    type: LOAD_DETAILS_FAILURE,
                    error: {
                        text: 'Во время выполения запроса произошла ошибка.'
                    }
                });
            });
        } else {
            return Promise.reject();
        }
    }
}
