import React from 'react'
import { useDropdown } from './dropdown-context'

function Search({ placeholder, ...props }) {
    const { onChange } = useDropdown()
    return (
        <div className='p-2 sticky top-0 z-12 bg-white'>
            <input
                type='text'
                placeholder={placeholder}
                className='p-4 outline-none w-full border border-gray-200 rounded'
                onChange={onChange}
                {...props}
            />
        </div>
    )
}

export default Search
