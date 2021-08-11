export const GET_USERS = 'GET_USERS'
export const TOTAL_COUNT = 'TOTAL_COUNT'
export const CHENGE_COUNT = 'CHENGE_COUNT'
export const LOADING = 'LOADING'
export const FOLLOWED = 'FOLLOWED'
export const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS'

const initialState = {
    users: [],
    pageCount: 1,
    totalCount: 0,
    loader: false,
    followingDisabled: false
}

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: [...action.payload]
            }
        case TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload
            }
        case CHENGE_COUNT:
            return {
                ...state,
                pageCount: action.payload
            }
        case LOADING:
            return {
                ...state,
                loader: action.payload
            }
        case FOLLOWED:
            let mewUsers = [...state.users].map((el: any) => {
                if (el.id === action.payload) {
                    return {
                        ...el,
                        followed: !el.followed
                    }
                }
                return el
            })
            return {
                ...state,
                users: mewUsers
            }
        case FOLLOWING_PROGRESS:
            return {
                ...state,
                followingDisabled: action.payload
            }
        default: return state
    }
}