import * as ActionTypes from './ActionTypes';

export const Gift = (state  = { isLoading: true,
                                        errMess: null,
                                        gift:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_GIFT:
        return {...state, isLoading: false, errMess: null, gift: action.payload};

        case ActionTypes.GIFT_LOADING:
            return {...state, isLoading: true, errMess: null, gift: []}

        case ActionTypes.GIFT_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};