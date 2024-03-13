import React from 'react'
import './navigation.css'
import sidebarlogo from '../../assets/images/sidebar-logo.svg'
import { menuslist } from '../../routes/menulist'
import arrow from '../../assets/images/left-arrow.svg'
import { NavLink } from 'react-router-dom'


function Navigation() {
  return (
    <div className='navigation p-[20px] flex flex-col gap-[40px] rounded-[26px] w-[380px] h-[900px] bg-[#FFF] text-[18px] font-[600] sm:hidden'>
        <div className='kampco-logo border-[1px] p-[20px] rounded-[10px] border-[#D4D4D4] flex justify-between'>
            <img src={sidebarlogo} alt='sidebarlogo'/>
            <img src={arrow} alt="arrow-icon" />
        </div>
        <div className='navigation-list flex flex-col gap-[40px]'>
            {
                menuslist.map(menu => { 
                    return (
                      <NavLink to={menu.path}>
                        <div className='list flex items-center gap-[15px] hover:text-[red] cursor-pointer' key={menu.id}>
                          <img className='w-[16px] h-[18px]' src={menu.icon} alt="icon" />
                          <p>{menu.name}</p>
                        </div>
                      </NavLink>
                      
                    )
                })  
            }
        </div>
      </div>
  )
}

export default Navigation
