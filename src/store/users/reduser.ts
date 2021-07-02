export const GET_USERS = 'GET_USERS'
export const TOTAL_COUNT = 'TOTAL_COUNT'
export const CHENGE_COUNT = 'CHENGE_COUNT'
export const LOADING = 'LOADING'

const initialState = {
    users: [],
    pageCount: 1,
    totalCount: 0,
    loader: false
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
        default: return state
    }
}