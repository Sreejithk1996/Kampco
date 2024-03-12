import React from 'react'

function Dashboard() {
  return (
    <div className='overview flex w-[100%] justify-between'>
      <div className='overview-sub'>
        <p className='text-[26px] font-[700]'>Overview</p>
        <p className='text-[18px] text-[#666]'>Hellow Admin!!!</p>
      </div>
      <div className='month  p-[20px] border-[1px] rounded-[10px] h-[50px] w-[150px] flex justify-center items-center'>
        <p className=''>This Month</p>
      </div>
    </div>
  )
}

export default Dashboard
