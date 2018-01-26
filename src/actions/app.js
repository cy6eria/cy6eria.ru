import axios from 'axios';

import {
    IS_LOADING, 
    LOGIN_START
} from '../actionTypes';

export const setIsLoadingState = (state) => ({
    type: IS_LOADING,
    isLoading: state
});

export const login = (username, password) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_START });
        
        return axios({
            method: 'post',
            url: '/api/login',
            data: { username, password }
        }).then(resp => {
            // dispatch({
            //     type: LOAD_POSTS_SUCCESS,
            //     posts: resp.data.rows
            // });
        }).catch(err => {
            // dispatch({
            //     type: LOAD_POSTS_FAILURE,
            //     error: {
            //         text: 'Во время выполения запроса произошла ошибка.'
            //     }
            // });
        });
    }
}
