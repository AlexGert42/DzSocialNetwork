import {SET_USER_DATA, IS_FETCHING, DELETE_USER_DATA} from "./reduser";
import {authAPI} from "../../api/api";


export const setAuthData = (data: any) => ({
    type: SET_USER_DATA,
    payload: data
})

export const dileteAuthData = () => ({
    type: DELETE_USER_DATA,
})

export const isFetchingAuth = (value: boolean) => ({
    type: IS_FETCHING,
    payload: value
})

////////

export const authMeThunk = () => (dispatch: any) => {
    return authAPI.authMe()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setAuthData(res.data))
                dispatch(isFetchingAuth(true))
            }
        })
}

export const loginThunk = (login: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.loginMe(login, password, rememberMe)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(authMeThunk())
            }
        })
}

export const logoutThunk = () => (dispatch: any) => {
    authAPI.logout()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(dileteAuthData())
            }
        })
}



