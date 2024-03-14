import React from 'react'
import bell from '../../assets/images/bell-icon.svg'
import profile from '../../assets/images/profile-pic.svg'
import black from '../../assets/images/black arrow.svg'

function DashboardTop() {
  return (
        <div className='dashboard-top  flex items-center justify-between gap-[30px]'>
          <input className='search w-[545px] h-[50px] rounded-[10px] border-[1px] border-[#D4D4D4] bg-[#F9FAFB] px-[15px] py-[9px]' type='text' placeholder=' Search' ></input>
          <div className='profile flex gap-[20px]'>
            <div className='notification w-[50px] h-[50px] border-[1px] border-[#D4D4D4] flex justify-center items-center rounded-[10px] relative cursor-pointer'>
              <img src={bell} alt="bell-icon" />
              <div className='alert absolute top-[-10px] right-[-10px] bg-[red] rounded-[50%] w-[25px] h-[25px] text-[12px] text-[#FFFF] flex justify-center items-center'>
                <p>15</p>
              </div>
            </div>
            <div className='login flex px-[15px] py-[5px] font-[700] border-[1px] border-[#D4D4D4] rounded-[10px] items-center gap-[10px] hover:cursor-pointer'>
              <img src={profile} alt="profilepic" />
              <p>Super Admin</p>
              <img src={black} alt="" />
            </div>
          </div>
        </div>
  )
}

export default DashboardTop
