import React from 'react'
import config from '../config'

const SignUpPage = React.lazy(() => import('../pages/SignUpPage'))
const SignInPage = React.lazy(() => import('../pages/SignInPage'))
const HomePage = React.lazy(() => import('../pages/HomePage'))
const CampaignPage = React.lazy(() => import('../pages/CampainPage'))
const StartCampaignPage = React.lazy(() => import('../pages/StartCampaignPage'))
const ViewPage = React.lazy(() => import('../pages/ViewPage'))
// signin, signup
const publicRouters = [
    { path: config.routers.signUp, component: SignUpPage, layout: null },
    { path: config.routers.signIn, component: SignInPage, layout: null },
    { path: config.routers.home, component: HomePage },
    { path: config.routers.campaign, component: CampaignPage },
    { path: config.routers.startCampaign, component: StartCampaignPage },
    { path: config.routers.detail, component: ViewPage },
]

const privateRouters = []

export { publicRouters, privateRouters }
