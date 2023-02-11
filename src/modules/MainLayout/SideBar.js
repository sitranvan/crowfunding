import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import CampaignIcon from '../../icons/CampaignIcon'
import DashboardIcon from '../../icons/DashboardIcon'
import PaymentIcon from '../../icons/PaymentIcon'
import WithDrawIcon from '../../icons/WithDrawIcon'
import ProfileIcon from '../../icons/ProfileIcon'
import LogoutIcon from '../../icons/LogoutIcon'
import DarkModeIcon from '../../icons/DarkModeIcon'

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
    },
    {
        icon: <DarkModeIcon />,
        title: 'Light/Dark',
        to: '/logout',
        onClick: () => {},
    },
]

function SideBar() {
    const location = useLocation()
    return (
        <div className='w-full md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,213,213,0.15)] px-[14px] py-10 flex flex-col flex-shrink-0'>
            {sideBarLinks.map((item) => (
                <NavLink
                    to={item.to}
                    key={item.title}
                    className={`flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-3xl md:mb-8  ${
                        item.to === location.pathname ? 'text-primary' : null
                    }`}
                >
                    <span> {item.icon}</span>
                    <span className='md:hidden'> {item.title}</span>
                </NavLink>
            ))}
        </div>
    )
}

export default SideBar
