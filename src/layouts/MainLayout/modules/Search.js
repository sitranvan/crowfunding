import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import SearchResult from './SearchResult'
function Search() {
    const [showSearch, setShowSearch] = useState(false)
    return (
        <div className='relative z-50'>
            <div className='bg-white rounded-full shadow-[rgba(17,12,46,0.15)_0px_48px_100px_0px] p-2 flex items-center '>
                <div className='flex-1 px-5'>
                    <input
                        type='text'
                        placeholder='Do fundrise now'
                        className='bg-transparent text-sm placeholder:text-text4 text-text1 w-full'
                    />
                </div>
                <button className='text-white w-[72px] h-10 flex items-center justify-center rounded-full bg-primary flex-shrink-0'>
                    <BiSearch fontSize='20px' />
                </button>
            </div>
            {showSearch && <SearchResult />}
        </div>
    )
}

export default Search
