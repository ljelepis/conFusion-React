import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

//reducer and initialState was deleted inside createStore,
//because all we need is combineReducers
//inside this combineReducers we specify how to combine these four simpler Reducers we have defined up there.
//After adding 4, we recomposed the global state for our application.
//React redux form fills in all the details by itself, so we don't need reducers.
//even if you reload your component, your form will stay the same.

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}