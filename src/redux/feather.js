import * as ActionTypes from './ActionTypes';

export const Feather = (state = { isLoading: true,
    errMess: null,
    feather:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEATHER:
            return {...state, isLoading: false, errMess: null, feather: action.payload};

        case ActionTypes.FEATHER_LOADING:
            return {...state, isLoading: true, errMess: null, feather: []}

        case ActionTypes.FEATHER_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};  