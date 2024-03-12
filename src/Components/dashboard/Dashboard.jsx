import React from 'react'

function Dashboard() {
  return (
    <div className='dash flex flex-col gap-[40px]'>
      <div className='overview flex w-[100%] justify-between'>
        <div className='overview-sub'>
          <p className='text-[26px] font-[700]'>Overview</p>
          <p className='text-[18px] text-[#666]'>Hellow Admin!!!</p>
        </div>
        <div className='month  p-[20px] border-[1px] rounded-[10px] h-[50px] w-[150px] flex justify-center items-center'>
          <p className='font-[500]'>This Month</p>
        </div>
      </div>
      <div className='flex gap-[20px] '>
        <div className='w-[100%] h-[200px] bg-[#00A551] rounded-[30px]'>
          <p>168</p>
          <p>Services Requested</p>
        </div>
        <div className='w-[100%] h-[200px] bg-[#F7C35F] rounded-[30px]'>
          <p>128</p>
          <p>Services In Progress</p>
        </div>
        <div className='w-[100%] h-[200px] bg-[#E51C26] rounded-[30px]'>
          <p>40</p>
          <p>Services Incomplete</p>
        </div>
        <div className='w-[100%] h-[200px] bg-[black] rounded-[30px]'>
          <p>200</p>
          <p>Total Customers</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
