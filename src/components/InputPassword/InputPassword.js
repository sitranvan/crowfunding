import React from 'react'
import useToggleValue from '../../hooks/useToggleValue'
import EyeIcon from '../../icons/EyeIcon'
import EyeSlashIcon from '../../icons/EyeSlashIcon'
import Input from '../Input'

function InputPassword({ control, error }) {
    const { value, handleToggleValue } = useToggleValue()

    return (
        <Input
            control={control}
            name='password'
            type={value ? 'text' : 'password'}
            placeholder='Crate a password'
            error={error}
            className='pr-14'
        >
            <span
                className='text-text3 cursor-pointer absolute top-1/2 -translate-y-1/2 right-6'
                onClick={handleToggleValue}
            >
                {value ? <EyeIcon width={5} height={5} /> : <EyeSlashIcon width={5} height={5} />}
            </span>
        </Input>
    )
}

export default InputPassword
