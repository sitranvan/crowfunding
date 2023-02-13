import React, { Fragment } from 'react'
import { AiFillStar } from 'react-icons/ai'
import Button from '../../components/Button'
import CamCategory from '../../components/Pages/CamCategory'
import CamDesc from '../../components/Pages/CamDesc'
import CamMeta from '../../components/Pages/CamMeta'
import CampTitle from '../../components/Pages/CamTitle'
import ViewPerk from './modules/ViewPerk'
import ViewSupport from './modules/ViewSupport'
import GridLayout from '../../layouts/GridLayout'
import CamItem from '../../components/Pages/CamItem'
function ViewPage() {
    return (
        <Fragment>
            <div
                style={{
                    backgroundImage: `linear-gradient(179.14deg,rgba(32, 18,63,0) -7.14%, rgba(0,0,0,0.4) 87.01%),url(/banner.png)`,
                }}
                className='h-[140px] rounded-3xl bg-center bg-cover bg-no-repeat gradient-banner flex items-center justify-center text-white text-4xl font-bold mb-10'
            >
                <h1>Education</h1>
            </div>
            <div className='flex items-start gap-x-10 w-full max-w-[1048px] mb-8'>
                <div className='flex-1 flex flex-col gap-y-7'>
                    <img src='/camera.png' alt='' className='h-[398px]  rounded-2xl' />
                    <div className='flex justify-center gap-x-5'>
                        <img src='/camera.png' alt='' className='w-[88px] h-[70px] object-cover rounded-md' />
                        <img src='/camera.png' alt='' className='w-[88px] h-[70px] object-cover rounded-md' />
                        <img src='/camera.png' alt='' className='w-[88px] h-[70px] object-cover rounded-md' />
                        <img src='/camera.png' alt='' className='w-[88px] h-[70px] object-cover rounded-md' />
                        <img src='/camera.png' alt='' className='w-[88px] h-[70px] object-cover rounded-md' />
                    </div>
                </div>

                <div className='flex-1 max-w-[430px] '>
                    <CamCategory className='mb-4 text-sm'>Archiecture</CamCategory>
                    <CampTitle className='font-bold text-xl mb-4'>Remake - We Make Archiecture exhibition </CampTitle>
                    <CamDesc className='text-sm '>
                        Remake - We Make Archiecture exhibition lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                    </CamDesc>
                    <div className='flex items-center gap-x-5'>
                        <img src='/camera.png' alt='' className='w-[60px] h-[60px] rounded-full object-cover' />

                        <div className='flex-flex-col flex-1 my-7'>
                            <div className='flex items-center gap-x-4'>
                                <h3 className='text-text1 font-medium text-base'>Saiful Islam</h3>
                                <div className='flex items-center'>
                                    {Array(5)
                                        .fill(0)
                                        .map((item, index) => (
                                            <AiFillStar key={index} color='#FFCE3D' />
                                        ))}
                                </div>
                            </div>
                            <div className='text-[13px] flex items-center gap-x-[10px]'>
                                <span className='font-semibold text-primary'>02 Campaign</span>
                                <span className='w-[6px] h-[6px] rounded-full bg-text3'></span>
                                <span className='text-text3'>Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[5px] rounded-full bg-[#eeeeee] mb-6'>
                        <div className='h-full w-1/2 bg-primary rounded-full'></div>
                    </div>
                    <div className='flex items-start justify-between gap-x-5 mb-4'>
                        <CamMeta size='big' amount='$2,000' text='Raised of $1,900' />
                        <CamMeta size='big' amount='173' text='Total backers' />
                        <CamMeta size='big' amount='173' text='Total backers' />
                    </div>
                    <Button className='bg-primary w-full text-white'>Back this project</Button>
                </div>
            </div>
            <div className='flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 rounded-xl mb-6'>
                <div className='flex items-center gap-x-14 text-sm font-medium text-text3'>
                    <span className='cursor-pointer text-secondary'>Campaign</span>
                    <span className='cursor-pointer '>Campaign</span>
                    <span className='cursor-pointer '>Campaign</span>
                    <span className='cursor-pointer '>Campaign</span>
                </div>
                <Button className='bg-primary text-white'>Back this project</Button>
            </div>
            <div className='grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]'>
                <div className=''>
                    <h2 className='text-lg font-semibold uppercase mb-5'>Story</h2>
                    <div className='bg-white w-full'></div>
                </div>
                <div className=''>
                    <ViewSupport />
                    <div className='mt-[60px]'></div>
                    <div className='flex flex-col gap-y-[30px]'>
                        <ViewPerk />
                    </div>
                </div>
            </div>
            <CampTitle className=' mb-8 font-semibold text-xl'>You also may be interested in</CampTitle>
            <GridLayout>
                <CamItem />
                <CamItem />
                <CamItem />
                <CamItem />
            </GridLayout>
        </Fragment>
    )
}

export default ViewPage
