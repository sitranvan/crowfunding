// Dùng để gọi API private cần accessToken
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { privateAxios } from '../utils/httpRequest.js'
import useRefreshToken from './useRefreshToken'

function usePrivateAxios() {
    const refresh = useRefreshToken()
    const { auth } = useSelector((state) => state)
    useEffect(() => {
        // No Authorization
        const requestInterceptor = privateAxios.interceptors.request.use(
            (config) => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth.accessToken}`
                }
                return config
            },
            (error) => Promise.reject(error),
        )

        // AccessToken Expires
        const responseInterceptor = privateAxios.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error.config
                if (error?.response?.status === 403 && !prevRequest.sent) {
                    prevRequest.sent = true
                    const newAccessToken = await refresh()
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                    return privateAxios(prevRequest)
                }
                return Promise.reject(error)
            },
        )
        // Cleanup
        return () => {
            privateAxios.interceptors.request.eject(requestInterceptor)
            privateAxios.interceptors.response.eject(responseInterceptor)
        }
    }, [auth.accessToken, refresh])

    return privateAxios
}

export default usePrivateAxios
