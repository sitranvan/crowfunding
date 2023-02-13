import React from 'react'
import { useForm } from 'react-hook-form'
import FormRow from '../../components/FormRow'
import FormGroup from '../../components/FormGroup'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Dropdown from '../../components/Dropdown'
import Checkbox from '../../components/Checkbox/Checkbox'
import ContributionSummury from '../../components/Pages/ContributionSummury'
import Payment from '../../components/Pages/Payment'

function ShippingPage() {
    const { control } = useForm()
    return (
        <div className='flex items-start w-full gap-x-[74px]'>
            <div className='flex-1'>
                <h2 className='font-bold text-[30px] leading-normal mb-10'>Shipping Address</h2>
                <FormRow>
                    <FormGroup>
                        <Label>First Name *</Label>
                        <Input control={control} name='first_name' placeholder='John' />
                    </FormGroup>
                    <FormGroup>
                        <Label>Last Name *</Label>
                        <Input control={control} name='last_name' placeholder='Doe' />
                    </FormGroup>
                </FormRow>
                <FormGroup>
                    <Label>Country *</Label>
                    <Dropdown>
                        <Dropdown.Select placeholder='Select country'></Dropdown.Select>
                        <Dropdown.List></Dropdown.List>
                    </Dropdown>
                </FormGroup>
                <FormRow>
                    <FormGroup>
                        <Label>Street Address *</Label>
                        <Input control={control} name='address' placeholder='John' />
                    </FormGroup>
                    <FormGroup>
                        <Label>City *</Label>
                        <Input control={control} name='city' placeholder='Doe' />
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup>
                        <Label>Postal Code *</Label>
                        <Input control={control} name='code' placeholder='123456' />
                    </FormGroup>
                    <FormGroup>
                        <Label>Phone Number *</Label>
                        <Input control={control} name='phone' placeholder='+123 456 789' />
                    </FormGroup>
                </FormRow>
                <div className='flex items-center gap-x-5 mb-11'>
                    <Checkbox>Remember this address for next time use</Checkbox>
                </div>
                <h2 className='font-bold text-[30px] leading-normal mb-10'>Payment</h2>
                <Payment />
            </div>
            <div className='flex-1 max-w-[462px] ml-auto'>
                <ContributionSummury />
            </div>
        </div>
    )
}

export default ShippingPage
