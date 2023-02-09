import React from 'react'

function CheckIcon({ width = 6, height = 6 }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 26 26'
            strokeWidth='1.5'
            stroke='currentColor'
            className={`w-${width} h-${height}`}
        >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
        </svg>
    )
}

export default CheckIcon
