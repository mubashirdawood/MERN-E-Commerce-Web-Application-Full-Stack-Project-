import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around sm:gap-4 gap-8 text-center py-20 text-xs md:text-base'>
      
    <div className='rounded-2xl bg-linear-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 p-8 hover:shadow-lg transition-shadow'>
      <img src={assets.exchange_icon} className='w-12 m-auto mb-5 filter brightness-110' alt="" />
      <p className='text-blue-900 font-semibold'> Easy Exchange & Return Policy</p>    
    </div>

    <div className='rounded-2xl bg-linear-to-br from-cyan-50 to-teal-50 border-2 border-cyan-200 p-8 hover:shadow-lg transition-shadow'>
      <img src={assets.quality_icon} className='w-12 m-auto mb-5 filter brightness-110' alt="" />
      <p className='text-cyan-900 font-semibold'> High Quality Products</p>    
    </div>

    <div className='rounded-2xl bg-linear-to-br from-teal-50 to-blue-50 border-2 border-teal-200 p-8 hover:shadow-lg transition-shadow'>
      <img src={assets.support_img} className='w-12 m-auto mb-5 filter brightness-110' alt="" />
      <p className='text-teal-900 font-semibold'> Best Customer Support</p>    
    </div>

    </div>
  )
}

export default OurPolicy
