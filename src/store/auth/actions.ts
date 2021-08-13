import {SET_USER_DATA, IS_FETCHING} from "./reduser";
import {authAPI} from "../../api/api";


export const setAuthData = (data: any) => ({
    type: SET_USER_DATA,
    payload: data
})

export const isFetchingAuth = (value: boolean) => ({
    type: IS_FETCHING,
    payload: value
})

////////

export const authMeThunk = () => (dispatch: any) => {
    authAPI.authMe()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setAuthData(res.data))
                dispatch(isFetchingAuth(true))
            }
        })
}



