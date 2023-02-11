import React from 'react'
import config from '../config'
const SignUpPage = React.lazy(() => import('../pages/SignUpPage'))
const SignInPage = React.lazy(() => import('../pages/SignInPage'))
const HomePage = React.lazy(() => import('../pages/HomePage'))
const CampaignPage = React.lazy(() => import('../pages/CampainPage'))

// signin, signup
const publicRouters = [
    { path: config.routers.signUp, component: SignUpPage, layout: null },
    { path: config.routers.signIn, component: SignInPage, layout: null },
    { path: config.routers.home, component: HomePage },
    { path: config.routers.campaign, component: CampaignPage },
]

const privateRouters = []

export { publicRouters, privateRouters }
