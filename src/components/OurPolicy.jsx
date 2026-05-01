import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around sm:gap-2 gap-12 text-center py-20 text-xs md:text-base'>
      

    <div>
      <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
      <p> Easy Exchange & Return Policy</p>    
    </div>

      <div>
      <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
      <p> High Quality Products</p>    
    </div>

      <div>
      <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
      <p> Best Customer Support</p>    
    </div>

    </div>
  )
}

export default OurPolicy
