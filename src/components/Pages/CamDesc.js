import React from 'react'

function CamDesc({ children = null, className = 'text-[13px] mb-4' }) {
    return <p className={`font-normal text-text3 ${className}`}>{children}</p>
}

export default CamDesc
