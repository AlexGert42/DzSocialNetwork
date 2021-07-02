
import {CHENGE_COUNT, GET_USERS, LOADING, TOTAL_COUNT} from "./reduser";


export const getUsersAction = (users: any) => ({
    type: GET_USERS,
    payload: users
})

export const getTotalCountAction = (count: any) => ({
    type: TOTAL_COUNT,
    payload: count
})

export const chengePageAction = (count: any) => ({
    type: CHENGE_COUNT,
    payload: count
})

export const loaderAction = (value: any) => ({
    type: LOADING,
    payload: value
})
