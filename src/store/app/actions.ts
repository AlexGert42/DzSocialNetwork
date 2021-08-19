import {SET_INITIALIZED} from "./reduser";
import {authMeThunk} from "../auth/actions";
import {Dispatch} from "react";

export type InitializedSuccessType = {
    type: string
}
export const initializedSuccess = (): InitializedSuccessType => ({
    type: SET_INITIALIZED,
})


export const initializedThunk = () => (dispatch: Dispatch<any>) => {
    let promiseAutch = dispatch(authMeThunk())
    Promise.all([promiseAutch])
        .then(() => {
            dispatch(initializedSuccess())
        })
}


