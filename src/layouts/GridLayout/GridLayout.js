import React from 'react'

function GridLayout({ children, col = 4, gap = 7 }) {
    return <div className={`grid grid-cols-${col} gap-x-${gap}`}>{children}</div>
}

export default GridLayout
