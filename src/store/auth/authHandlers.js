import { toast } from 'react-toastify'
import { call, put } from 'redux-saga/effects'
import authApi from '../../services/authApi'
import { saveToken } from '../../utils/auth'
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
            saveToken(response.data.accessToken, response.data.refreshToken)
            yield call(handleAuthFetchMe, { payload: response.data.accessToken })
        }
        yield 1
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
        console.log('response', response)
        if (response.status === 200) {
            yield put(
                authUpdateUser({
                    user: response.data,
                    accessToken: payload,
                }),
            )
        }
        // response.data -> userInfo
    } catch (error) {
        console.log(error)
    }
}

function* handleAuthRefreshToken({ payload }) {
    try {
        const response = yield call(authApi.refreshToken, payload)
        if (response.data) {
            saveToken(response.data.accessToken, response.data.refreshToken)
            yield call(handleAuthFetchMe, {
                payload: response.data.accessToken,
            })
        }
    } catch (error) {}
}

export { handleAuthRegister, handleAuthLogin, handleAuthFetchMe, handleAuthRefreshToken }
