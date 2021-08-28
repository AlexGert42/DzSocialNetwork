import {InitializedSuccessType, NavbarActionType} from "./actions";

export const SET_INITIALIZED = 'SET_INITIALIZED'
export const SHOW_NAV = 'SHOW_NAV'

const initialState = {
    initialized: false,
    navbar: false
}
type StateType = typeof initialState

type ActionType = InitializedSuccessType & NavbarActionType

export const appReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        case SHOW_NAV:
            return {
                ...state,
                navbar: action.payload
            }


    }
    return state
}

