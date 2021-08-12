import {applyMiddleware, combineReducers, createStore} from 'redux'
import {profileReducer} from "./profile/reduser";
import {dialodsReduscer} from "./dialogs/reduser";
import {userReducer} from "./users/reduser";
import {authReduscer} from "./auth/reduser";
import thunk from 'redux-thunk'


export const rootReducer = combineReducers({
    profileReducer,
    dialodsReduscer,
    userReducer,
    authReduscer,
});

export type StoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store