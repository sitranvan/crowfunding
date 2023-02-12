import React, { Fragment } from 'react'
import { AiFillStar } from 'react-icons/ai'
import CampaignCate from '../../modules/Home/CampaignCate'
import CampaignDesc from '../../modules/Home/CampaignDesc'
import CampaignMeta from '../../modules/Home/CampaignMeta'
import CampaignTitle from '../../modules/Home/CampaignTitle'
import Button from '../../components/Button'
function Detail() {
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
            <div className='flex items-center gap-x-10 w-full max-w-[1048px] mb-8'>
                <div className='flex-1'>
                    <img src='/camera.png' alt='' className='h-[398px]  rounded-2xl' />
                </div>

                <div className='flex-1 max-w-[430px] '>
                    <CampaignCate className='mb-4 text-sm'>Archiecture</CampaignCate>
                    <CampaignTitle className='font-bold text-xl mb-4'>
                        Remake - We Make Archiecture exhibition{' '}
                    </CampaignTitle>
                    <CampaignDesc className='text-sm '>
                        Remake - We Make Archiecture exhibition lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                    </CampaignDesc>
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
                        <CampaignMeta size='big' amount='$2,000' text='Raised of $1,900' />
                        <CampaignMeta size='big' amount='173' text='Total backers' />
                        <CampaignMeta size='big' amount='173' text='Total backers' />
                    </div>
                    <Button className='bg-primary w-full text-white'>Back this project</Button>
                </div>
            </div>
        </Fragment>
    )
}

export default Detail
