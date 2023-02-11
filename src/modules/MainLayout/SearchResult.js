import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import SearchItem from './SearchItem'

function SearchResult() {
    return (
        <div className='w-full lg:w-[840px] bg-white absolute top-full left-0 z-50 translate-y-5 pb-6 rounded-3xl'>
            <div className='flex items-center justify-between p-3 bg-graySoft rounded-3xl '>
                <h4 className='font-semibold text-base pl-4 underline'>See all 10,125 fundraisier</h4>
                <button className='flex items-center justify-center w-[72px] h-[45px] rounded-xl bg-error bg-opacity-20 text-error'>
                    <AiOutlineClose fontSize='20px' />
                </button>
            </div>
            <div className='p-6 pb-0'>
                <div className='mb-6 flex flex-col gap-y-5'>
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                </div>
                <h3 className='text-[15px] font-semibold mb-4'>Related searchs</h3>
                <div className='flex flex-col gap-y-3 text-[15px] text-text2'>
                    <p>
                        <strong>education</strong> fund
                    </p>
                    <p>schoralship fund</p>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
