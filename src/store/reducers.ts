import {applyMiddleware, combineReducers, createStore} from 'redux'
import {profileReducer} from "./profile/reduser";
import {dialodsReduscer} from "./dialogs/reduser";
import {userReducer} from "./users/reduser";
import {authReducer} from "./auth/reduser";
import {appReducer} from './app/reduser'
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


export const rootReducer = combineReducers({
    appReducer,
    profileReducer,
    dialodsReduscer,
    userReducer,
    authReducer,
    form: formReducer
});

export type StoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store