import React from 'react'

function CampaignMeta({ amount = '', text = '', size = 'small' }) {
    return (
        <div className='flex flex-col gap-y-1'>
            <h4 className={`text-text1  font-semibold ${size === 'small' ? 'text-[15px]' : 'text-[18px]'}`}>
                {amount}
            </h4>
            <span className={`text-text4  ${size === 'small' ? 'text-[13px]' : 'text-[15px]'}`}>{text}</span>
        </div>
    )
}

export default CampaignMeta
