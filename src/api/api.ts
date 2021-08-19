import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '9708f55c-7c56-4108-a0bf-76b37c22e7d1',
    }
})

export const usersAPI = {
    getUsers(countPage: number) {
        return instance.get(`users?page=${countPage}`).then(res => res.data)
    },
    getFollowing(id: string) {
        return instance.post(`follow/${id}`).then(res => res.data)
    },
    getUnFollowing(id: string) {
        return instance.delete(`follow/${id}`).then(res => res.data)
    }
}


export const profileAPI = {
    getProfile(userId: any) {
        return instance.get(`/profile/${userId}`).then(res => res.data)
    },
    getStatus(id: string) {
        return instance.get(`/profile/status/${id}`).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status/`, {status: status}).then(res => res.data)


    }


}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(res => res.data)
    },
    loginMe(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(res => {
            return res.data
        })
    },
    logout() {
        return instance.delete(`auth/login`).then(res => {
            return res.data
        })
    }
}