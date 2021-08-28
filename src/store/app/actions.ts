import {SET_INITIALIZED, SHOW_NAV} from "./reduser";
import {authMeThunk} from "../auth/actions";
import {Dispatch} from "react";

export type InitializedSuccessType = {
    type: string
}
export const initializedSuccess = (): InitializedSuccessType => ({
    type: SET_INITIALIZED,
})

export type NavbarActionType = {
    type: string
    payload: boolean
}

export const navbarHendler = (value: boolean): NavbarActionType => ({
    type: SHOW_NAV,
    payload: value
})


export const initializedThunk = () => (dispatch: Dispatch<any>) => {
    let promiseAutch = dispatch(authMeThunk())
    Promise.all([promiseAutch])
        .then(() => {
            dispatch(initializedSuccess())
        })
}


