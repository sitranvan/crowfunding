import React, { Fragment, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'
import { publicRouters } from './routers'
function App() {
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
