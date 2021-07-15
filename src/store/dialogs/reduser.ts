import { v1 } from "uuid";

import {ADD_MESSAGE} from "./actions";


const idUsers = {
    victor: v1(),
    leon: v1(),
    bogdan: v1(),
    ivan: v1()
}

const initialState = {
    message: {
        [idUsers.victor]: [
            {id: v1(), name: 'victor', message: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfdgfd gfgf'},
            {id: v1(), name: 'victor', message: 'hfdghfgh fjdshgfbghf gfdgfd gfgf'},
            {id: v1(), name: 'victor', message: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfgf'},
            {id: v1(), name: 'victor', message: 'hfdghfgh fjdsh jgfdgfd gfgf'},
        ],
        [idUsers.leon]: [
            {id: v1(), name: 'leon', message: 'hfdghfgh fjdsh jgbdsg bgfb ghfb f gfdgfd gfgf'},
            {id: v1(), name: 'leon', message: 'hfdghfgh fjf gfdgfd gfgf'},
            {id: v1(), name: 'leon', message: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfgf'},
            {id: v1(), name: 'leon', message: 'hfdghfgh fjdsh jgfdgfd gfgf'},
        ],
        [idUsers.bogdan]: [
            {id: v1(), name: 'bogdan', message: 'hfdghfgh ds jgbdsg bgfb ghfb hgff gfdgfd gfgf'},
            {id: v1(), name: 'bogdan', message: 'hfdghfgh  jgbdsg bgfb ghfb hgfbghf gfgf'},
            {id: v1(), name: 'bogdan', message: 'hfdghfgh fjdsh jgfdgfd gfgf'},
        ],
        [idUsers.ivan]: [
            {id: v1(), name: 'ivan', message: 'hfdghfgh fjdsh jgbdsg bgfb ghfb hgfbghf gfdgfd gfgf'},
            {id: v1(), name: 'ivan', message: 'hfdghfgh fjdshgfbghf gfdgfd gfgf'},
            {id: v1(), name: 'ivan', message: 'hfdhgfbghf gfgf'},
            {id: v1(), name: 'ivan', message: 'hfdghfgh fjdsh jgfdgfd gfgf'},
        ],

    }
    ,
    users: [
        {id: idUsers.victor, name: 'victor', foloving: false},
        {id: idUsers.leon, name: 'leon', foloving: false},
        {id: idUsers.bogdan, name: 'bogdan', foloving: true},
        {id: idUsers.ivan, name: 'ivan', foloving: false},
    ]
}

export const dialodsReduscer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newMessage = [...state.message[action.payload[1]]]
            newMessage.push(action.payload[0])
            let messageUsers = {...state.message, [action.payload[1]]: newMessage}
            return {
                ...state,
                message: messageUsers
            }
    }
    return state
}

