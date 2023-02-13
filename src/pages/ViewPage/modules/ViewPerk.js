import React from 'react'
import Button from '../../../components/Button'

function ViewPerk({ showBtn = false }) {
    return (
        <div className=''>
            <div className='bg-white shadow-1 rounded-xl'>
                <img src='/camera.png' alt='' className='h-[232px] object-cover rounded-xl w-full' />
                <div className='p-5'>
                    <span className='inline-block bg-secondary text-white font-medium text-xs py-1 px-3 rounded-sm mb-5'>
                        Featured
                    </span>
                    <h2 className='text-xl text-text1 font-semibold'>Special One Camera</h2>
                    <div className='flex items-center gap-x-3 mb-4 mt-1'>
                        <span className='font-bold text-text1 text-base'>$2,724 USD</span>
                        <span className='text-sm text-error line-through font-medium'>$1,504 USD </span>
                        <span className='text-sm font-medium text-error'>(12% OFF)</span>
                    </div>
                    <div className='flex flex-col gap-y-1 mb-4'>
                        <p className='font-medium'>Estimated Shipping</p>
                        <span className='text-text2'>October 2022</span>
                    </div>
                    <div className='text-text2 mb-4'>
                        <span className='font-medium text-text1'>05</span> claimed
                    </div>
                    <p className='text-text2'>Ships worldwide</p>
                </div>
            </div>
            {showBtn && (
                <div className='mt-6'>
                    <Button className='bg-secondary text-white w-full'>Get this perk</Button>
                </div>
            )}
        </div>
    )
}

export default ViewPerk
