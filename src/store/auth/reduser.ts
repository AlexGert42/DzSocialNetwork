
export const SET_USER_DATA = 'SET_USER_DATA'
export const DELETE_USER_DATA ='DELETE_USER_DATA'
export const IS_FETCHING = 'IS_FETCHING'


const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
}

export const authReducer = (state = initialState, action: any) => {
switch (action.type) {
    case SET_USER_DATA:
        return {
            ...state,
            ...action.payload,
            isAuth: true
        }
    case DELETE_USER_DATA:
        return {
            ...state,
            id: null,
            login: null,
            email: null,
            isAuth: false,
        }
    case IS_FETCHING:
        return {
            ...state,
            isFetching: action.payload
        }
}
    return state
}

