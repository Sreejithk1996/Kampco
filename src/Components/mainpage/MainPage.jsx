import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Navigation from '../navigation/Navigation'
import bell from '../../assets/images/bell-icon.svg'
import profile from '../../assets/images/profile-pic.svg'
import black from '../../assets/images/black arrow.svg'

function MainPage() {
  return (
    <div className='dashboard flex gap-[50px]'>
      <Navigation />
      <div className='dashboard-main w-[100%] flex flex-col gap-[50px]'>
        <div className='dashboard-top  flex items-center justify-between gap-[30px]'>
          <input className='search w-[545px] h-[50px] rounded-[10px] border-[1px] border-[#D4D4D4] bg-[#F9FAFB] px-[15px] py-[9px]' type='text' placeholder=' Search' ></input>
          <div className='profile flex gap-[20px]'>
            <div className='notification w-[50px] h-[50px] border-[1px] border-[#D4D4D4] flex justify-center items-center rounded-[10px] cursor-pointer'>
              <img src={bell} alt="bell-icon" />
            </div>
            <div className='login flex px-[15px] py-[5px] font-[700] border-[1px] border-[#D4D4D4] rounded-[10px] items-center gap-[10px] hover:cursor-pointer'>
              <img src={profile} alt="profilepic" />
              <p>Super Admin</p>
              <img src={black} alt="" />
            </div>
          </div>
        </div>
        <Dashboard />
      </div> 
    </div>
  )
}

export default MainPage
