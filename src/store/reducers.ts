import {combineReducers, createStore} from 'redux'
import {profileReducer} from "./profile/reduser";
import {dialodsReduscer} from "./dialogs/reduser";
import {userReducer} from "./users/reduser";
import {authReduscer} from "./auth/reduser";


export const rootReducer = combineReducers({
    profileReducer,
    dialodsReduscer,
    userReducer,
    authReduscer
});

export type StoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store