import React from 'react'
import { Link } from 'react-router-dom'
import FolderIcon from '../../icons/FolderIcon'

function CampaignCate({ children = null, className = '' }) {
    return (
        <Link to='/' className={`flex items-baseline gap-x-3 text-sm font-medium text-text3 mb-4 ${className}`}>
            <FolderIcon />
            <span>{children}</span>
        </Link>
    )
}

export default CampaignCate
