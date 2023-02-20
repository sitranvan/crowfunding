import React, { Fragment, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'
import { publicRouters } from './routers'
import { authRefreshToken, authUpdateUser } from './store/auth/authSlice'
import { getToken, logOut } from './utils/auth'
function App() {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    console.log('user', user)
    useEffect(() => {
        const { refresh_token, access_token } = getToken()
        if (user && user.id) {
            dispatch(
                authUpdateUser({
                    user,
                    accessToken: access_token,
                }),
            )
        } else {
            if (refresh_token) {
                dispatch(authRefreshToken(refresh_token))
            } else {
                dispatch(authUpdateUser({}))
                logOut()
            }
        }
    }, [user, dispatch])
    return (
        <Suspense>
            <Routes>
                {publicRouters.map(({ component: Page, layout, path }) => {
                    let Layout = Fragment
                    if (layout) {
                        Layout = layout
                    }
                    return (
                        <Route
                            key={uuidV4()}
                            path={path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    )
                })}
            </Routes>
        </Suspense>
    )
}

export default App
