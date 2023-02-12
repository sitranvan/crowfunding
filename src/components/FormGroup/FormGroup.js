import React from 'react'

function FormGroup({ children, className }) {
    return <div className={`flex flex-col mb-6 gap-y-3 ${className}`}>{children}</div>
}

export default FormGroup
