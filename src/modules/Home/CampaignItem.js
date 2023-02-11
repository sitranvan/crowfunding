import React from 'react'
import CampaignAuhor from './CampaignAuhor'
import CampaignCate from './CampaignCate'
import CampaignDesc from './CampaignDesc'
import CampaignMeta from './CampaignMeta'
import CampaignTitle from './CampaignTitle'
function CampaignItem() {
    return (
        <div>
            <div className='h-[165px]'>
                <img
                    src='https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60'
                    alt=''
                    className='w-full h-full object-cover rounded-2xl'
                />
            </div>
            <div className='px-5 py-4'>
                <CampaignCate>Education</CampaignCate>
                <CampaignTitle>Powered Kits Learning Boxes</CampaignTitle>
                <CampaignDesc>Fun, durable and reusable boxes with eco-friendly options</CampaignDesc>
                <div className='flex item-start justify-between gap-x-5 mb-5'>
                    <CampaignMeta amount='$2,000' text='Raised of $1,900' />
                    <CampaignMeta amount='173' text='Total backers' />
                </div>
                <CampaignAuhor name='Jon rola' />
            </div>
        </div>
    )
}

export default CampaignItem
