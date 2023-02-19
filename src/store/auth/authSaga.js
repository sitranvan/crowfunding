import { takeLatest } from 'redux-saga/effects'
import { handleAuthLogin, handleAuthRefreshToken, handleAuthRegister } from './authHandlers'
import { authLogin, authRefreshToken, authRegister } from './authSlice'

function* authSaga() {
    yield takeLatest(authRegister.type, handleAuthRegister)
    yield takeLatest(authLogin.type, handleAuthLogin)
    yield takeLatest(authRefreshToken.type, handleAuthRefreshToken)
}

export default authSaga
