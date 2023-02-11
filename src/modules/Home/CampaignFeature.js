import React from 'react'
import CampaignCate from './CampaignCate'
import CampaignDesc from './CampaignDesc'
import CampaignMeta from './CampaignMeta'
import CampaignTitle from './CampaignTitle'

function CampaignFeature() {
    return (
        <div className='flex items-center gap-x-8 w-full max-w-[1048px] mb-8'>
            <img
                src='https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60'
                alt=''
                className='h-[280px] flex-1 rounded-2xl'
            />
            <div className='flex-1 max-w-[430px] '>
                <CampaignCate className='mb-4 text-sm'>Archiecture</CampaignCate>
                <CampaignTitle className='font-bold text-xl mb-4'>
                    Remake - We Make Archiecture exhibition{' '}
                </CampaignTitle>
                <CampaignDesc className='text-sm mb-6'>
                    Remake - We Make Archiecture exhibition lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                </CampaignDesc>
                <div className='w-full h-[5px] rounded-full bg-[#eeeeee] mb-6'>
                    <div className='h-full w-1/2 bg-primary rounded-full'></div>
                </div>
                <div className='flex items-start justify-between gap-x-5'>
                    <CampaignMeta size='big' amount='$2,000' text='Raised of $1,900' />
                    <CampaignMeta size='big' amount='173' text='Total backers' />
                    <CampaignMeta size='big' amount='173' text='Total backers' />
                </div>
            </div>
        </div>
    )
}

export default CampaignFeature
