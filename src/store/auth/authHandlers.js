import { toast } from 'react-toastify'
import { call, put } from 'redux-saga/effects'
import authApi from '../../services/authApi'
import { logOut, saveToken } from '../../utils/auth'
import { authUpdateUser } from './authSlice'
function* handleAuthRegister({ payload }) {
    // const { payload } = action
    try {
        const response = yield call(authApi.register, payload)
        if (response.status === 201) {
            toast.success('Account successfully created')
        }
    } catch (error) {
        console.log(error)
    }
}

function* handleAuthLogin({ payload }) {
    try {
        const response = yield call(authApi.login, payload)
        // Lưu lại bên cookies
        if (response.data.accessToken && response.data.refreshToken) {
            yield call(handleAuthFetchMe, { payload: response.data.accessToken })
            saveToken(response.data.accessToken, response.data.refreshToken)
        }
    } catch (error) {
        const response = error.response.data
        if (response.statusCode === 403) {
            toast.error(response.error.message)
        }
    }
}

function* handleAuthFetchMe({ payload }) {
    try {
        const response = yield call(authApi.fetchMe, payload)
        // thông tin user -> response.data
        if (response.status === 200) {
            yield put(
                authUpdateUser({
                    user: response.data,
                    accessToken: payload,
                    // payload từ hàm handleAuthLogin khi login vì login sever trả về accessToken
                }),
            )
        }
    } catch (error) {
        console.log(error)
    }
}

// Nhưng khi reload lại mặc dù đã lưu vào store nhưng vẫn mất thông tin user dù đã đăng nhập vì vậy chúng ta phải gọi API dựa vào accessToken đã đăng nhập trước đó
function* handleAuthRefreshToken({ payload }) {
    try {
        const response = yield call(authApi.refreshToken, payload)
        if (response.data) {
            // Lưu lại thông tin ở cookies
            saveToken(response.data.accessToken, response.data.refreshToken)
            yield call(handleAuthFetchMe, {
                payload: response.data.accessToken,
            })
        } else {
            yield handleAuthLogout()
        }
    } catch (error) {
        console.log(error)
    }
}

function* handleAuthLogout() {
    yield put(
        authUpdateUser({
            user: undefined,
            accessToken: null,
        }),
    )
    logOut()
}

export { handleAuthRegister, handleAuthLogin, handleAuthFetchMe, handleAuthRefreshToken, handleAuthLogout }
