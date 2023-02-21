// Dùng trả ra accessToken mới thông qua useRefreshToken
import { getToken } from '../utils/auth'
import authApi from '../services/authApi'
import { authUpdateUser } from '../store/auth/authSlice'
function useRefreshToken() {
    const refresh = () => {
        const { refresh_token } = getToken()
        const response = authApi.refreshToken(refresh_token)
        if (response.data) {
            authUpdateUser((prev) => ({
                ...prev,
                accessToken: response.data.accessToken,
            }))
        }
        return response.data.accessToken
    }
    return refresh
}

export default useRefreshToken
