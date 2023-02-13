import React from 'react'
import Input from '../../../components/Input'
import { useForm } from 'react-hook-form'
import Button from '../../../components/Button'
function ViewSupport() {
    const { control } = useForm()
    return (
        <div>
            <h2 className='font-semibold text-lg mb-5'>Support</h2>
            <div className='bg-white shadow-1 w-full py-7 px-6 flex flex-col justify-center '>
                <p className='text-lg text-center text-text3 mb-8'>Pledge without reward</p>
                <Input
                    control={control}
                    name='pedge'
                    placeholder='$10'
                    className='text-lg font-medium py-2 px-5 border border-strock w-full rounded mb-5'
                />
                <div className='bg-grayF3 p-5 rounded-xl mb-5'>
                    <p className='text-text2 text-sm font-semibold mb-5'>Back it because you believe in it.</p>
                    <p className='text-text3 text-sm'>
                        Support the project for no reward, just because it speaks to you.
                    </p>
                </div>
                <Button className='bg-secondary text-white w-full'>Continue</Button>
            </div>
        </div>
    )
}

export default ViewSupport
