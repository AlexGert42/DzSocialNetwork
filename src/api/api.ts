import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '9708f55c-7c56-4108-a0bf-76b37c22e7d1'
    }
})

export const usersAPI = {
    getUsers(countPage: number) {
        return instance.get(`users?page=${countPage}`)
            .then(res => {
                return res.data
            })
    },
    followedUsers(id: string) {
        return instance.post(`follow/${id}`, {}, {
            headers: instance
        }).then(res => {
            return res.data
        })
    }
}


export const getFollowing = (id: string) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": '9708f55c-7c56-4108-a0bf-76b37c22e7d1'
        }
    })
        .then(res => {
            return res.data
        })
}

export const getUnFollowing = (id: string) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            "API-KEY": '9708f55c-7c56-4108-a0bf-76b37c22e7d1'
        }
    }).then(res => {
        return res.data
    })
}