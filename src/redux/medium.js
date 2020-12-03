import * as ActionTypes from './ActionTypes';



export const Medium = (state = { isLoading: true,
    errMess: null,
    medium:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MEDIUM:
            return {...state, isLoading: false, errMess: null, medium: action.payload};

        case ActionTypes.MEDIUM_LOADING:
            return {...state, isLoading: true, errMess: null, medium: []}

        case ActionTypes.MEDIUM_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};  