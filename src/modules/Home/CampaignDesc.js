import React from 'react'

function CampaignDesc({ children = null, className = 'text-[13px] mb-4' }) {
    return <p className={`font-normal text-text3 ${className}`}>{children}</p>
}

export default CampaignDesc
