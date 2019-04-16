import * as ActionTypes from './ActionTypes';

//Implementing Reducer function, taking the stae, and action as the two parameters. 
//Return, implement this as the switch. So, it'll switch on the action.type
//For the default, you return the state unmodified.
//So, this is the default implementation for our dishes.js file.
//Giving default value as dishes, and then returning the state.

export const Dishes = (state = {
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []};//Whatever I pass next to the state will be applied as modifications.

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []};//dishes have tried to be loaded but failed.

        default:
            return state;
    }
}