import React from 'react'
import { useDropdown } from './dropdown-context'

function List({ children }) {
    const { show } = useDropdown()
    return (
        <>
            {show && (
                <div className='absolute top-full left-0 w-full rounded-lg bg-white shadow-sm z-10 max-h-[300px] overflow-y-auto'>
                    {children}
                </div>
            )}
        </>
    )
}

export default List
