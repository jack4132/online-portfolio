import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Large } from './large';
import { Medium } from './medium';
import { Small } from './small';
import { Comments } from './comments';
import { Cotton } from './cotton';
import { Gift } from './gift';
import { Feather } from './feather';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            large: Large,
            medium: Medium,
            small: Small,
            comments: Comments,
            cotton: Cotton,
            gift: Gift,
            feather: Feather,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}