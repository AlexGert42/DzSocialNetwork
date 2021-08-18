export const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_INITIALIZED:

            return {
                ...state,
                initialized: true
            }
    }
    return state
}

