import React from 'react'
import Overlay from '../../components/Overlay'
import Header from './modules/Header'
import SideBar from './modules/SideBar'

function MainLayout({ children }) {
    return (
        <div className='p-10 bg-lite'>
            <Overlay />
            <Header />
            <div className='flex gap-x-10 items-start'>
                <SideBar />
                <div className='flex-1 px-[14px]'> {children}</div>
            </div>
        </div>
    )
}

export default MainLayout
