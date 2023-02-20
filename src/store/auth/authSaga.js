import { takeLatest } from 'redux-saga/effects'
import { handleAuthLogin, handleAuthLogout, handleAuthRefreshToken, handleAuthRegister } from './authHandlers'
import { authLogin, authLogout, authRefreshToken, authRegister } from './authSlice'

function* authSaga() {
    yield takeLatest(authRegister.type, handleAuthRegister)
    yield takeLatest(authLogin.type, handleAuthLogin)
    yield takeLatest(authRefreshToken.type, handleAuthRefreshToken)
    yield takeLatest(authLogout.type, handleAuthLogout)
}

export default authSaga
