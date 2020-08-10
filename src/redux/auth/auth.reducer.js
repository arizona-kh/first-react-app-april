import authTypes from './auth.types';
// State describes the condition of the app at a specific point in time
// The UI is rendered based on that state
const initialState = {
    currentUser: null
};

// A reducer is a function that receives the current state and an action object, 
// decides how to update the state if necessary, and returns the new state: (state, action) => newState
// They are not allowed to modify the existing state. 
// Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
const authReducer = ( state = initialState, action ) => {
      // Check to see if the reducer cares about this action
    switch ( action.type ) {
        case authTypes.SET_CURRENT_USER:
            return {
                // copy current state
                ...state,
                // update currentUser without mutating original initialState obj
                currentUser: action.payload
            };
            // otherwise return the existing state unchanged
            default:
                return state;
    }
};

export default authReducer;