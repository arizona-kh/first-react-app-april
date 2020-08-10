// Action
    // An action is a plain JavaScript object that has a type field
    // type string - "domain/eventName", where the first part is the feature or category that this action belongs to, 
    // and the second part is the specific thing that happened.
import authTypes from './auth.types';

// action creator - a function that creates and returns an action object
export const setCurrentUser = ( user ) => {
    // user goes here
    return { 
        type: authTypes.SET_CURRENT_USER,
        payload: user // additional information about what happened
    };
};