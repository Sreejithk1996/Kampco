import React from 'react'
import './navigation.css'
import sidebarlogo from '../../assets/images/sidebar-logo.svg'
import { menuslist } from '../../routes/menulist'

function Navigation() {
  return (
    <div className='navigation p-[20px] flex flex-col gap-[40px] rounded-[26px] w-[300px] h-[880px] bg-[#FFF] text-[15px] font-[600]'>
        <div className='kampco-logo border-[1px] p-[20px] rounded-[10px] border-[#D4D4D4]'>
          <img src={sidebarlogo} alt='sidebarlogo'/>
        </div>
        <div className='navigation-list flex flex-col gap-[40px]'>
            {
                menuslist.map(menu => { 
                    return (
                        <div className='list flex items-center gap-[15px] hover:text-[red] cursor-pointer' key={menu.id}>
                        <img className='w-[15px] h-[17px]' src={menu.icon} alt="icon" />
                        <p>{menu.name}</p>
                      </div>
                    )
                })

               
            }

          {/* <div className='list'>
            <img src={dashicon} alt="dashicon" />
            <p>Dashboard</p>
          </div>
          <div className='list'>
            <img src={serviceordericon} alt="serviceordericon" />
            <p>Service Orders</p>
          </div>
          <div className='list'>
            <img src={servicesicon} alt="servicesicon" />
            <p>Services</p>
          </div>
          <div className='list'>
            <img src={productsicon} alt="productsicon" />
            <p>Products</p>
          </div>
          <div className='list'>
             <img src={customericon} alt="customericon" />
             <p>Customers</p>
          </div>
          <div className='list'>    
            <img src={billicon} alt="billicon" />
            <p>Bill Generation & Payment</p>
          </div>
          <div className='list'>
            <img src={usericon} alt="usericon" />
            <p>Users</p>
          </div>
          <div className='list'>
            <img src={reporticon} alt="reporticon" />
            <p>Reports</p>
          </div>
          <div className='list'>
            <img src={issueicon} alt="issueicon" />
            <p>Issue Master</p>
          </div> */}
        </div>
      </div>
  )
}

export default Navigation