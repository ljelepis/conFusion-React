//Importing all the action types into our action creators.
import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

//defined an action type
//addComment is a function that creates an action object.
//takes in four parameters to create it, in an arrow function.
//the payload contains whatever needs to be carried in.
//so the data that is sent back by the addComment.
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
//fetchDishes is a thunk. will dispatch several actions
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING//will inform that dishes will be loaded.
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});