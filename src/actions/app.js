import { IS_LOADING } from '../actionTypes';

export const setIsLoadingState = (state) => ({
    type: IS_LOADING,
    isLoading: state
});
