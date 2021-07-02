import { v1 } from "uuid"
import {ADD_POST, REMOVE_POST} from "./actions";



export type actionType = {
    type: string
    payload: any
}



const initialState = {
    posts: [
        {id: v1(), name: 'viktor', text: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfdgfd gfgf'},
        {id: v1(), name: 'ivan', text: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfdgfd gfgf'},
        {id: v1(), name: 'igor', text: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfdgfd gfgf'},
        {id: v1(), name: 'lix', text: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfdgfd gfgf'},
    ],
    profile: {
        fullName: '',
        aboutMe: '',
        contacts: {
            facebook: '',
            github: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: {
            large: '',
            small: ''
        }
    }
}

export const postReducer = (state = initialState, action: actionType) => {

    switch (action.type) {
        case ADD_POST :
            let newPosts = [...state.posts]
            newPosts.push(action.payload)
            return {
                ...state,
                posts: newPosts
            }
        case REMOVE_POST :
            let filterPosts = [...state.posts]
            filterPosts = filterPosts.filter(el => el.id !== action.payload)
           return {
               ...state,
               posts: filterPosts
           }
    }
    return state
}