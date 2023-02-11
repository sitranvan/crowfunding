import React from 'react'

function GridLayout({ children }) {
    return <div className='grid grid-cols-4 gap-x-7'>{children}</div>
}

export default GridLayout
