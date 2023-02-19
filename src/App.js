import React, { Fragment, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'
import { publicRouters } from './routers'
import { authRefreshToken, authUpdateUser } from './store/auth/authSlice'
import { getToken } from './utils/auth'
function App() {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        if (user && user.id) {
            const { access_token } = getToken()

            dispatch(
                authUpdateUser({
                    user: user,
                    accessToken: access_token,
                }),
            )
        } else {
            const { refresh_token } = getToken()
            if (refresh_token) {
                dispatch(authRefreshToken(refresh_token))
            } else {
                dispatch(authRefreshToken({}))
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
