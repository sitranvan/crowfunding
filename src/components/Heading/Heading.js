import React from 'react'

function Heading({ children = null, className = '', number = null }) {
    return (
        <h2 className={`text-lg font-semibold text-text1 mb-5 ${className}`}>
            {children}
            {number && <span className='text-secondary ml-1'>{`(${number})`}</span>}
        </h2>
    )
}

export default Heading
