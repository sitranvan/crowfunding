import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { BiTrendingUp } from 'react-icons/bi'
import Button from '../../components/Button/Button'
import Search from './Search'

function Header() {
    return (
        <div className='flex items-center justify-between mb-8 px-[14px]'>
            <div className='flex items-center gap-x-[54px] flex-1'>
                <img srcSet='/logo.png 2x' alt='logo' />
                <div className='w-full max-w-[458px]'>
                    <Search />
                </div>
            </div>
            <div className='flex items-center gap-x-10 flex-1 justify-end'>
                <div className='flex gap-x-2 items-center text-text2 text-base font-medium cursor-pointer'>
                    <BiTrendingUp fontSize='20px' />
                    <span>Fundrising for</span>
                    <BsChevronDown className='mb-1' />
                </div>
                <Button className='bg-secondary px-6'>Start a campaign</Button>
                <img srcSet='/logo.png 2x' alt='logo' className='rounded-full object-cover' />
            </div>
        </div>
    )
}

export default Header
