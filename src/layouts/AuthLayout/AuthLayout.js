import React from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import { Link } from 'react-router-dom'
import ErrorCpn from '../../components/ErrorCpn'

function AuthLayout({ children = null, heading = '' }) {
    return (
        <div className='dark:bg-darkBg w-full min-h-screen bg-lite p-5 lg:p-10 relative isolate'>
            <img src='./ellipse.png' alt='bg' className='pointer-events-none absolute bottom-0 left-0 right-0 z-[-1]' />
            <Link to='/' className='inline-block mb-5 lg:mb-16'>
                <img srcSet='/logo.png 2x' alt='logo' />
            </Link>
            <div className='dark:bg-darkSecondary w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto'>
                <h1 className='dark:text-white mb-1 font-semibold text-lg lg:text-xl lg:mb-3 text-text1 text-center'>
                    {heading}
                </h1>
                {children}
            </div>
        </div>
    )
}

export default withErrorBoundary(AuthLayout, {
    FallbackComponent: ErrorCpn,
})
