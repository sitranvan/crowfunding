import React from 'react'
import CamAuthor from './CamAuthor'
import CamCategory from './CamCategory'
import CamDesc from './CamDesc'
import CamMeta from './CamMeta'
import CampTitle from './CamTitle'
function CamItem() {
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
                <CamCategory>Education</CamCategory>
                <CampTitle>Powered Kits Learning Boxes</CampTitle>
                <CamDesc>Fun, durable and reusable boxes with eco-friendly options</CamDesc>
                <div className='flex item-start justify-between gap-x-5 mb-5'>
                    <CamMeta amount='$2,000' text='Raised of $1,900' />
                    <CamMeta amount='173' text='Total backers' />
                </div>
                <CamAuthor name='Jon rola' />
            </div>
        </div>
    )
}

export default CamItem
