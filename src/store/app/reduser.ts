import {InitializedSuccessType} from "./actions";

export const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
    initialized: false
}
type StateType = typeof initialState

type ActionType = InitializedSuccessType

export const appReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
    }
    return state
}

