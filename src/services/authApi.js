import { authRequest } from '../utils/httpRequest.js'

const authApi = {
    register: (payload) => {
        const url = 'auth/register'
        return authRequest.post(url, payload)
    },
    login: (payload) => {
        const url = 'auth/login'
        return authRequest.post(url, payload)
    },
    fetchMe: (token) => {
        const url = 'me'
        return authRequest.get(url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
    },
    refreshToken: (token) => {
        const url = 'token'
        return authRequest.post(url, {
            refreshToken: token,
        })
    },
}

export default authApi
