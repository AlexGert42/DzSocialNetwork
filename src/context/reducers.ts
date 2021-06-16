import {combineReducers, createStore} from 'redux'
import {postReducer} from "./posts/reduser";


export const rootReducer = combineReducers({
    postReducer
});

export const store = createStore(rootReducer)