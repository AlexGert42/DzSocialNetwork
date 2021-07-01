export const GET_USERS = 'GET_USERS'

const initialState = {
    users: []

}

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.payload]
            }
        default: return state
    }
}