import React from 'react'
import icon1 from '../../assets/images/1.svg'
import icon2 from '../../assets/images/2.svg'
import icon3 from '../../assets/images/3.svg'
import icon4 from '../../assets/images/4.svg'
import green from '../../assets/images/Green arrow.svg'
import { useState } from 'react'

function Dashboard() {

  const [state,setstate] = useState('')
  const [state2,setstate2] = useState([])

  const add = () => {
    setstate2 (state)
  }
 

  return (
    <div className='dash flex flex-col gap-[40px]'>
      <div className='overview flex w-[100%] justify-between'>
        <div className='overview-sub'>
          <p className='text-[26px] font-[700] sm:text-[16px]'>Overview</p>
          <p className='text-[18px] text-[#666]'>Hellow Admin!!!</p>
        </div>
        <div className='month  p-[20px] border-[1px] rounded-[10px] h-[50px] w-[auto] flex justify-center items-center gap-[20px] hover:cursor-pointer'>
          <p className='font-[500]'>This Month</p>
          <img src={green} alt="arrow-icon" />
        </div>
      </div>
      <div className='flex gap-[20px] '>
        <div className='w-[100%] h-[200px] bg-[#00A551] rounded-[30px] text-[#FFFF] hover:cursor-pointer flex flex-col justify-center items-center gap-[10px]'>
          <p className='text-[36px]'>168</p>
          <p>Services Requested</p>
          <div className='w-[50px] h-[50px] rounded-[50%] bg-[#FFFF] flex justify-center items-center'>
            <img src={icon1} alt="icon" />
          </div>
        </div>
        <div className='w-[100%] h-[200px] bg-[#F7C35F] rounded-[30px] text-[black] hover:cursor-pointer flex flex-col justify-center items-center gap-[10px]'>
          <p className='text-[36px]'>128</p>
          <p>Services In Progress</p>
          <div className='w-[50px] h-[50px] rounded-[50%] bg-[black] flex justify-center items-center'>
            <img src={icon2} alt="icon" />
          </div>
        </div>
        <div className='w-[100%] h-[200px] bg-[#E51C26] rounded-[30px] text-[#FFFF] hover:cursor-pointer flex flex-col justify-center items-center gap-[10px]'>
          <p className='text-[36px]'>40</p>
          <p>Services Incomplete</p>
          <div className='w-[50px] h-[50px] rounded-[50%] bg-[#FFFF] flex justify-center items-center'>
            <img  src={icon3} alt="icon" />
          </div>
        </div>
        <div className='w-[100%] h-[200px] bg-[black] rounded-[30px] text-[#FFFF] hover:cursor-pointer flex flex-col justify-center items-center gap-[10px]'>
          <p className='text-[36px]'>200</p>
          <p>Total Customers</p>
          <div className='w-[50px] h-[50px] rounded-[50%] bg-[#FFFF] flex justify-center items-center'>
            <img src={icon4} alt="icon" />
          </div>
        </div>
      </div>

      <div className='text-center'>
        <input className='border-[2px]' type="text" value={state} onChange={(event) => setstate(event.target.value)}/>
        <button onClick={add}>add</button>
        {state2}
      </div>

    </div>
  )
}

export default Dashboard
