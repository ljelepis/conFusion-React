//we need an action that allows us to change the state
//of our application in the Redux store.
//define the various action types by using muliple string constants.
//Reason for creating action types file here: 
//When you define it like this, then you can import these action types
//into the reducive functions and then use that to do the matching 
//in the switch statement that you use there.

export const ADD_COMMENT = 'ADD_COMMENT';
export const DISHES_LOADING = 'DISHES_LOADING';
export const DISHES_FAILED = 'DISHES_FAILED';
export const ADD_DISHES = 'ADD_DISHES';