import React from 'react'
import Navigation from '../navigation/Navigation'
import Dashtop from '../dashboard-top/DashboardTop'
import { Outlet } from 'react-router-dom'

function MainPage() {
  return (
    <div className='dashboard flex gap-[50px]'>
      <Navigation />
      <div className='dashboard-main w-[100%] flex flex-col gap-[50px]'>
        <Dashtop/>
        <Outlet/>
      </div> 
    </div>
  )
}

export default MainPage
