import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Navigation from '../navigation/Navigation'

function MainPage() {
  return (
    <div className='dashboard flex gap-[50px]'>
      <Navigation />
      <div className='dashboard-main'>
        <div className='dashboard-top'>
          <input className='search w-[545px] h-[50px] rounded-[10px] border-[1px] border-[#D4D4D4] bg-[#F9FAFB] px-[15px] py-[9px]' type='text' placeholder='Search' ></input>
          <div className='profile'>
            <div className='notification'>

            </div>
            <div className='login'>

            </div>
          </div>
        </div>
        <Dashboard />
      </div> 
    </div>
  )
}

export default MainPage
