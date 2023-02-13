import React from 'react'

function GridLayout({ children = null, cols1 = false }) {
    return <div className={`grid  ${cols1 ? 'grid-cols-1 gap-x-10' : 'grid-cols-4 gap-x-7'}`}>{children}</div>
}

export default GridLayout
