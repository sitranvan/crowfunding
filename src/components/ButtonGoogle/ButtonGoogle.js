import React from 'react'

function ButtonGoogle({ children }) {
    return (
        <button className='flex items-center justify-center w-full gap-3 py-4 border border-strock dark:border-darkStroke rounded-xl text-text2 font-semibold mb-5 dark:text-white'>
            <img srcSet='/icon-google.png 2x' alt='icon-google' />
            <span>{children}</span>
        </button>
    )
}

export default ButtonGoogle
