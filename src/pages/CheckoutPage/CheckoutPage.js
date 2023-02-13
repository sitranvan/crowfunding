import React from 'react'
import ContributionSummury from '../../components/Pages/ContributionSummury'
import Payment from '../../components/Pages/Payment'

function CheckoutPage() {
    return (
        <div className='max-w-[891px] flex items-start'>
            <div>
                <h2 className='font-bold text-[30px] leading-normal mb-10'>Payment</h2>
                <Payment />
            </div>
            <div className='flex-1 max-w-[462px] ml-auto'>
                <ContributionSummury />
            </div>
        </div>
    )
}

export default CheckoutPage
