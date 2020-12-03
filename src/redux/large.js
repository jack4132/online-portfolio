import * as ActionTypes from './ActionTypes';



export const Large = (state = { isLoading: true,
    errMess: null,
    large:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LARGE:
            return {...state, isLoading: false, errMess: null, large: action.payload};

        case ActionTypes.LARGE_LOADING:
            return {...state, isLoading: true, errMess: null, large: []}

        case ActionTypes.LARGE_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};  