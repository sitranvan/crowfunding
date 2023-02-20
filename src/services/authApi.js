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
        if (!token) return
        const url = 'me'
        return authRequest.get(url, {
            headers: {
                // backend yêu cầu
                Authorization: `Bearer ${token}`,
            },
        })
    },
    refreshToken: (token) => {
        if (!token) return
        const url = 'token'
        return authRequest.post(url, {
            // backend yêu cầu
            refreshToken: token,
        })
    },
}

export default authApi
