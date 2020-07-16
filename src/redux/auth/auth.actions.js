// action creators
import authTypes from './auth.types';

export const setCurrentUser = ( user ) => {
    // user goes here
    return { 
        type: authTypes.SET_CURRENT_USER,
        payload: user
    };
};