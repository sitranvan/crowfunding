import React from 'react'
import CamCategory from './CamCategory'
import CamDesc from './CamDesc'
import CamMeta from './CamMeta'
import CampTitle from './CamTitle'

function CamFeature() {
    return (
        <div className='flex items-center gap-x-8 w-full max-w-[1048px] mb-8'>
            <img
                src='https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60'
                alt=''
                className='h-[280px] flex-1 rounded-2xl'
            />
            <div className='flex-1 max-w-[430px] '>
                <CamCategory className='mb-4 text-sm'>Archiecture</CamCategory>
                <CampTitle className='font-bold text-xl mb-4'>Remake - We Make Archiecture exhibition </CampTitle>
                <CamDesc className='text-sm mb-6'>
                    Remake - We Make Archiecture exhibition lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                </CamDesc>
                <div className='w-full h-[5px] rounded-full bg-[#eeeeee] mb-6'>
                    <div className='h-full w-1/2 bg-primary rounded-full'></div>
                </div>
                <div className='flex items-start justify-between gap-x-5'>
                    <CamMeta size='big' amount='$2,000' text='Raised of $1,900' />
                    <CamMeta size='big' amount='173' text='Total backers' />
                    <CamMeta size='big' amount='173' text='Total backers' />
                </div>
            </div>
        </div>
    )
}

export default CamFeature
