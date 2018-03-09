import {
    IS_LOADING, 
    LOGIN_SUCCESS
} from '../actionTypes';
import { request } from '../core';

export const setIsLoadingState = (state) => ({
    type: IS_LOADING,
    isLoading: state
});

export const login = (username, password) => {
    return (dispatch) => {
        dispatch({ type: IS_LOADING, isLoading: true });
        
        return request({
            method: 'post',
            url: '/api/login',
            data: { username, password }
        }).then(resp => {
            dispatch({ type: LOGIN_SUCCESS });
        }).catch(err => {
            dispatch({ type: IS_LOADING, isLoading: false });
        });
    }
}
