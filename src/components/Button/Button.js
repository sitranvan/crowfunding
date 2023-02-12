import React from 'react'
import { Link } from 'react-router-dom'

function Button({
    children = null,
    type = 'button',
    className = '',
    isLoading = false,
    disable = false,
    outline = false,
    to = '',
    href = '',
    icon = null,
    ...props
}) {
    let Comp = 'button'
    Comp = to ? Link : href ? 'a' : Comp
    props.to = to
    props.href = href
    return (
        <Comp
            className={`flex justify-center items-center p-4 text-base font-semibold rounded-xl text-white h-14 ${
                outline && 'bg-secondary text-secondary bg-opacity-20'
            } ${(!!isLoading || disable) && 'opacity-50 pointer-events-none'} ${className}`}
            type={type}
            {...props}
        >
            {!!isLoading ? (
                <div className='w-8 h-8 border-2 border-white rounded-full border-t-transparent border-b-transparent animate-spin'></div>
            ) : (
                <div className='flex items-center gap-x-1'>
                    {children}
                    {icon && <span>{icon}</span>}
                </div>
            )}
        </Comp>
    )
}

export default Button
