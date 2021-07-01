import { v1 } from "uuid"
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_TEST'

export const addPost = (text: string) => {
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

export const removePost = (id: string) => ({type: REMOVE_POST, payload: id})



