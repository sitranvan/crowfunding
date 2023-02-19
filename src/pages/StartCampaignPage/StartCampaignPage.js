import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AddNewCampaign from './modules/AddNewCampaign'

function StartCampaignPage() {
    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    console.log('user: ', user)
    useEffect(() => {
        if (!user || !user.email) {
            navigate('/sign-in')
        }
    }, [user, navigate])
    return (
        <Fragment>
            <AddNewCampaign />
        </Fragment>
    )
}

export default StartCampaignPage
