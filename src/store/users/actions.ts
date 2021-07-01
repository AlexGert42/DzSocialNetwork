
import {GET_USERS} from "./reduser";


export const getUsersAction = (users: any) => {
    return {
        type: GET_USERS,
        payload: users
    }
}
