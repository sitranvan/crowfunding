import React, { Fragment, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'
import MainLayout from './layouts/MainLayout'
import { publicRouters } from './routers'
function App() {
    return (
        <Suspense>
            <Routes>
                {publicRouters.map(({ component: Page, layout, path }) => {
                    let Layout = layout === null ? Fragment : MainLayout
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
