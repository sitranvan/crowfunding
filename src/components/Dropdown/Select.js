import React from 'react'
import { DropdownDown, DropdownUp } from '../Icons/Icons'
import { useDropdown } from './dropdown-context'

function Select({ placeholder = '', className = '' }) {
    const { toggle, show } = useDropdown()
    return (
        <div
            className={`flex items-center justify-between py-4 px-6 bg-white border border-strock rounded-xl text-text1 cursor-pointer text-sm  ${className}`}
            onClick={toggle}
        >
            <span className='capitalize'>{placeholder}</span>
            <span>{show ? <DropdownUp /> : <DropdownDown />}</span>
        </div>
    )
}

export default Select
