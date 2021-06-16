import { v1 } from "uuid"
import {ADD_POST, REMOVE_POST} from "./actions";


const initialState = {
    posts: [
        {id: v1(), name: 'viktor', text: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfdgfd gfgf'},
        {id: v1(), name: 'ivan', text: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfdgfd gfgf'},
        {id: v1(), name: 'igor', text: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfdgfd gfgf'},
        {id: v1(), name: 'lix', text: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfdgfd gfgf'},
    ],
}

export const postReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST :
            let newPosts = [...state.posts]
            newPosts.push(action.newPost)
            return {
                ...state,
                posts: newPosts
            }
        case REMOVE_POST :
            let filterPosts = [...state.posts]
            filterPosts = filterPosts.filter(el => el.id !== action.id)
           return {
               ...state,
               posts: filterPosts
           }
    }
    return state
}