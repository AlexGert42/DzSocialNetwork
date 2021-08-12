import { v1 } from "uuid"
import {profileAPI} from "../../api/api";
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_TEST'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type AddPostType = {
    type: 'ADD_POST'
    payload: {
        id: string
        name: string
        text: string
    }
}

export const addPost = (text: string): AddPostType => {
    let newPost = {
        id: v1(),
        name: 'alex',
        text: text
    }
    return {
        type: ADD_POST,
        payload: newPost,
    }
}

export type RemovePostType = {
    type: 'REMOVE_TEST'
    payload: string
}
export const removePost = (id: string): RemovePostType => ({
    type: REMOVE_POST,
    payload: id
})

export type SetUserProfileType = {
    type: 'SET_USER_PROFILE'
    payload: any
}
export const setUserProfile = (profile: any): SetUserProfileType => ({
    type: SET_USER_PROFILE,
    payload: profile
})

////////////////////////



export const getProfileThunk = (id: number) => (dispatch: any) => {
    profileAPI.getProfile(id).then(res => {
        dispatch(setUserProfile(res.data))
    })
}



