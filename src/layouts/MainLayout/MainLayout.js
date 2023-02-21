import React from 'react'
import ReactModal from 'react-modal'
import Overlay from '../../components/Overlay'
import Header from './modules/Header'
import SideBar from './modules/SideBar'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '../../components/Button'
import ViewPerk from '../../pages/ViewPage/modules/ViewPerk'
import RequireAuthPage from '../../pages/RequireAuthPage/RequireAuthPage'
function MainLayout({ children }) {
    return (
        <RequireAuthPage>
            <div className='p-10 bg-lite'>
                <Overlay />
                <ReactModal
                    isOpen={false}
                    overlayClassName='modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center'
                    className='modal-cotent w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-auto scroll-hidden'
                >
                    <button className='absolute z-10 right-3 top-3 text-text1 w-11 h-11 flex justify-center items-center'>
                        <AiOutlineClose fontSize='24px' />
                    </button>
                    <h2 className='font-bold text-2xl mb-10 text-center mt-1'>Back this project</h2>
                    <p className='mb-3 text-sm'>Enter the contribute amount</p>
                    <input
                        type='text'
                        name='amount'
                        placeholder='$10'
                        className='text-lg font-medium py-2 px-5 border border-strock w-full rounded mb-5'
                    />
                    <p className='my-5 text-sm text-text3'>Contribution are not associatied with perks</p>
                    <Button className='bg-primary text-white'>Continue</Button>
                    <div className='mt-[60px]'></div>
                    <ViewPerk showBtn />
                </ReactModal>
                <Header />
                <div className='flex gap-x-10 items-start'>
                    <SideBar />
                    <div className='flex-1 px-[14px]'> {children}</div>
                </div>
            </div>
        </RequireAuthPage>
    )
}

export default MainLayout
