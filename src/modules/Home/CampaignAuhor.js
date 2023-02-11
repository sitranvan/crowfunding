import React from 'react'

function CampaignAuhor({
    avatar = 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
    name = '',
}) {
    return (
        <div className='flex items-center gap-x-3'>
            <img className='w-8 h-8 rounded-full object-cover' src={avatar} alt='' />
            <p className='text-[13px] text-text3'>
                by <span className='font-semibold text-text2 ml-1'>{name}</span>
            </p>
        </div>
    )
}

export default CampaignAuhor
