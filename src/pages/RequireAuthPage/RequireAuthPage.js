import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function RequireAuthPage({ children }) {
    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        // Nếu không có user điều hướng về trang đăng nhập
        if (!user || !user.email) {
            navigate('/sign-in')
        }
    }, [user, navigate])

    return <Fragment>{children}</Fragment>
}

export default RequireAuthPage
