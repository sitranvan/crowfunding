import React from 'react'
import config from '../config'
import PaymentLayout from '../layouts/PaymentLayout'
import MainLayout from '../layouts/MainLayout'
import ShippingPage from '../pages/ShippingPage'
const SignUpPage = React.lazy(() => import('../pages/SignUpPage'))
const SignInPage = React.lazy(() => import('../pages/SignInPage'))
const HomePage = React.lazy(() => import('../pages/HomePage'))
const CampaignPage = React.lazy(() => import('../pages/CampainPage'))
const StartCampaignPage = React.lazy(() => import('../pages/StartCampaignPage'))
const ViewPage = React.lazy(() => import('../pages/ViewPage'))
const CheckoutPage = React.lazy(() => import('../pages/CheckoutPage'))
// signin, signup
const publicRouters = [
    { path: config.routers.signUp, component: SignUpPage, layout: null },
    { path: config.routers.signIn, component: SignInPage, layout: null },
    { path: config.routers.home, component: HomePage, layout: MainLayout },
    { path: config.routers.campaign, component: CampaignPage, layout: MainLayout },
    { path: config.routers.startCampaign, component: StartCampaignPage, layout: MainLayout },
    { path: config.routers.detail, component: ViewPage, layout: MainLayout },
    { path: config.routers.checkout, component: CheckoutPage, layout: PaymentLayout },
    { path: config.routers.shipping, component: ShippingPage, layout: PaymentLayout },
]

const privateRouters = []

export { publicRouters, privateRouters }
