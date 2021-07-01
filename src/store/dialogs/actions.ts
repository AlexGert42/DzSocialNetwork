import {v1} from "uuid";

export const ADD_MESSAGE = 'ADD_MESSAGE'

export const addMessage = (id: string, text: string) => {
    let newMssage = {
        id: v1(),
        name: 'Alex',
        message: text
    }

    return {
        type: ADD_MESSAGE,
        payload: [newMssage, id],

    }
}

