import {SET_USER_DATA, IS_FETCHING} from "./reduser";


export const setAuthData = (data: any) => ({
    type: SET_USER_DATA,
    payload: data
})

export const isFetchingAuth = (value: boolean) => ({
    type: IS_FETCHING,
    payload: value
})




