import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import {
    CampaignIcon,
    DarkModeIcon,
    DashboardIcon,
    LogoutIcon,
    PaymentIcon,
    ProfileIcon,
    WithDrawIcon,
} from '../../../components/Icons'
import { authLogout } from '../../../store/auth/authSlice'

const sideBarLinks = [
    {
        icon: <DashboardIcon />,
        title: 'Dashboard',
        to: '/',
    },
    {
        icon: <CampaignIcon />,
        title: 'Campaign',
        to: '/campaign',
    },
    {
        icon: <PaymentIcon />,
        title: 'Payment',
        to: '/payment',
    },
    {
        icon: <WithDrawIcon />,
        title: 'Withdraw',
        to: '/withdraw',
    },
    {
        icon: <ProfileIcon />,
        title: 'Profile',
        to: '/profile',
    },
    {
        icon: <LogoutIcon />,
        title: 'Logout',
        to: '/logout',
        onClick: () => {},
    },
    {
        icon: <DarkModeIcon />,
        title: 'Light/Dark',
        to: '/light-dark',
    },
]

function SideBar() {
    const location = useLocation()
    const dispatch = useDispatch()
    const handleSideBar = (to) => {
        if (to === '/logout') {
            dispatch(authLogout())
        }
    }
    return (
        <div className='w-full md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,213,213,0.15)] px-[14px] py-10 flex flex-col flex-shrink-0'>
            {sideBarLinks.map((item) => {
                const isClickable = !item.onClick
                return (
                    <React.Fragment key={item.title}>
                        {isClickable ? (
                            <NavLink
                                to={item.to}
                                className={`flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-3xl md:mb-8  ${
                                    item.to === location.pathname ? 'text-primary' : null
                                }`}
                            >
                                <span> {item.icon}</span>
                                <span className='md:hidden'> {item.title}</span>
                            </NavLink>
                        ) : (
                            <div
                                onClick={() => handleSideBar(item.to)}
                                className={`flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-3xl md:mb-8 cursor-pointer`}
                            >
                                <span> {item.icon}</span>
                                <span className='md:hidden'> {item.title}</span>
                            </div>
                        )}
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default SideBar
