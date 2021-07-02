import {combineReducers, createStore} from 'redux'
import {postReducer} from "./profile/reduser";
import {dialodsReduscer} from "./dialogs/reduser";
import {userReducer} from "./users/reduser";


export const rootReducer: any = combineReducers({
    postReducer,
    dialodsReduscer,
    userReducer
});

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store