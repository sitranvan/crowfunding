import React from 'react'

function SearchItem() {
    return (
        <div className='flex items-center gap-x-5'>
            <img
                src='https://images.unsplash.com/photo-1632260260864-caf7fde5ec36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60'
                alt=''
                className='w-[50px] h-[50px] rounded-lg object-cover'
            />
            <div className='flex-1 text-sm'>
                <h3 className='mb-1'>
                    <strong>Education</strong> fund for Durgham Family
                </h3>
                <p className='text-text3'>By Durgham Family</p>
            </div>
        </div>
    )
}

export default SearchItem
