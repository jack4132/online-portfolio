import * as ActionTypes from './ActionTypes';

export const Cotton = (state  = { isLoading: true,
                                        errMess: null,
                                        cotton:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COTTON:
        return {...state, isLoading: false, errMess: null, cotton: action.payload};

        case ActionTypes.COTTON_LOADING:
            return {...state, isLoading: true, errMess: null, cotton: []}

        case ActionTypes.COTTON_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};