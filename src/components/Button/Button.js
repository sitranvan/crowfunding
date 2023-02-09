import React from 'react'

function Button({ children = null, type = 'button', className = '', isLoading = false, disable = false, ...props }) {
    return (
        <button
            className={`flex justify-center items-center p-4 text-base font-semibold rounded-xl text-white h-14 ${
                (!!isLoading || disable) && 'opacity-50 pointer-events-none'
            } ${className}`}
            type={type}
            {...props}
        >
            {!!isLoading ? (
                <div className='w-8 h-8 border-2 border-white rounded-full border-t-transparent border-b-transparent animate-spin'></div>
            ) : (
                children
            )}
        </button>
    )
}

export default Button
