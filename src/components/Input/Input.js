import React from 'react'
import { useController } from 'react-hook-form'

function Input({
    children = null,
    control = null,
    className = '',
    name = '',
    type = 'text',
    placeholder = '',
    error = '',
    ...props
}) {
    const { field } = useController({
        control,
        name,
        defaultValue: '',
    })
    return (
        <div className='relative'>
            <input
                className={`${className} w-full py-4 px-6 border  rounded-xl text-sm  text-text1 dark:text-white placeholder:text-text4 dark:placeholder:text-text2 dark:bg-transparent  ${
                    error.length > 0
                        ? 'border-error text-error placeholder:text-error'
                        : 'border-strock dark:border-darkStroke'
                }`}
                type={type}
                placeholder={error.length <= 0 ? placeholder : error}
                id={name}
                {...field}
                {...props}
            />
            {children}
        </div>
    )
}

export default Input
