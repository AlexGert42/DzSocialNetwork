import {SET_INITIALIZED} from "./reduser";
import {authMeThunk} from "../auth/actions";


export const initializedSuccess = () => ({
    type: SET_INITIALIZED,

})


export const initializedThunk = () => (dispatch: any) => {
    let promiseAutch = dispatch(authMeThunk())
    Promise.all([promiseAutch])
        .then(() => {
            dispatch(initializedSuccess())
        })
}


