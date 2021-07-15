import { v1 } from "uuid"
import {ADD_POST, AddPostType, REMOVE_POST, RemovePostType, SET_USER_PROFILE, SetUserProfileType} from "./actions";

type ActionType = AddPostType | RemovePostType | SetUserProfileType




const initialState = {
    posts: [
        {id: v1(), name: 'viktor', text: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfdgfd gfgf'},
        {id: v1(), name: 'ivan', text: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfdgfd gfgf'},
        {id: v1(), name: 'igor', text: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfdgfd gfgf'},
        {id: v1(), name: 'lix', text: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfdgfd gfgf'},
    ],
    profile: null
}

type StateType = typeof initialState

export const profileReducer = (state: StateType = initialState, action: ActionType): StateType => {

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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
    }
    return state
}


// fullName: '',
// aboutMe: '',
// contacts: {
//     facebook: '',
//     github: '',
// },
// lookingForAJob: false,
// lookingForAJobDescription: '',
// photos: {
//     large: '',
//     small: ''
// }
