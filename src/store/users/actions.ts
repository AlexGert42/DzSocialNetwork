
import {CHENGE_COUNT, GET_USERS, LOADING, TOTAL_COUNT, FOLLOWED, FOLLOWING_PROGRESS} from "./reduser";
import {usersAPI} from "../../api/api";


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

export const followedAction = (id: string) => ({
    type: FOLLOWED,
    payload: id
})

export const followingDisabledAction = (value: boolean, id: string) => ({
    type: FOLLOWING_PROGRESS,
    payload: id,
    isFetching: value
})


/////////

export const getUsersThunk = (count: number) => (dispatch: any) => {
    dispatch(loaderAction(true))
    dispatch(chengePageAction(count))
    usersAPI.getUsers(count).then((response: any) => {
        dispatch(getTotalCountAction(response.totalCount))
        dispatch(getUsersAction(response.items))
        dispatch(loaderAction(false))
    })
}

export const chengeFollowingUserThunk = (flag: number, id: string) => (dispatch: any) => {
    dispatch(followingDisabledAction(true, id))
    let followResult
    if (flag === 0) {
        followResult = usersAPI.getUnFollowing(id)
    } else {
        followResult = usersAPI.getFollowing(id)
    }

    followResult.then((response: any) => {
        if (response.resultCode === 0) {
            dispatch(followedAction(id))
            dispatch(followingDisabledAction(false, id))
        }
    })
}

