import React, { Fragment } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'
import Button from '../../components/Button'
import Heading from '../../components/Heading'
import CamFeature from '../../components/Pages/CamFeature'
import GridLayout from '../../layouts/GridLayout'
function CampaignPage() {
    return (
        <Fragment>
            <div className='mb-10 bg-white rounded-3xl flex items-center justify-between py-8 px-10'>
                <div className='flex items-start gap-x-6 '>
                    <button className='w-14 h-14 rounded-full flex items-center justify-center bg-secondary bg-opacity-60 text-white'>
                        <AiOutlinePlus fontSize='24px' />
                    </button>
                    <div className='flex-1'>
                        <h1 className='text-[22px] font-semibold mb-2'>Create Your Campaign</h1>
                        <p className='text-sm text-text3'>
                            Jump right into our editor and create your first Virtue campaign!
                        </p>
                        <a href='/' className='text-primary text-sm'>
                            Need any help? Learn More...
                        </a>
                    </div>
                </div>
                <Button outline className='px-6' to='/start-campaign'>
                    Create campaign
                </Button>
            </div>
            <Heading number={4}>Your campaign</Heading>
            <GridLayout cols1>
                <CamFeature />
                <CamFeature />
                <CamFeature />
                <CamFeature />
            </GridLayout>
            <div className='text-center mb-10 mt-5'>
                <Button className='mx-auto px-8' outline icon={<BsPlusLg fontSize='8px' />}>
                    See More
                </Button>
            </div>
        </Fragment>
    )
}

export default CampaignPage
