import React from 'react'
import { BsCheck2 } from 'react-icons/bs'
function Checkbox({ name = '', checked = false, onClick = () => {}, children }) {
    return (
        <div className='flex items-start gap-x-5'>
            <div
                className={` cursor-pointer inline-flex items-center text-white justify-center p-1 w-5 h-5 rounded border ${
                    checked ? 'border-primary bg-primary' : 'border-text3 '
                }`}
                onClick={onClick}
            >
                <input type='checkbox' name={name} className='hidden' />
                <span className={`${!checked && 'opacity-0 invisible'}`}>
                    <BsCheck2 fontSize='18px' />
                </span>
            </div>
            {children && (
                <label onClick={onClick} className='cursor-pointer flex-1 text-text3'>
                    {children}
                </label>
            )}
        </div>
    )
}

export default Checkbox
