import * as ActionTypes from './ActionTypes';



export const Small = (state = { isLoading: true,
    errMess: null,
    small:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SMALL:
            return {...state, isLoading: false, errMess: null, small: action.payload};

        case ActionTypes.SMALL_LOADING:
            return {...state, isLoading: true, errMess: null, small: []}

        case ActionTypes.SMALL_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};  