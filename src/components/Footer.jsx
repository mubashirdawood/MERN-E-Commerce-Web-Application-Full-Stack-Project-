import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div >
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'> 
      <div>
        <img src={assets.logo}alt="" className='mb-5 w-32' /> 
        <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos rem iste minus earum totam reprehenderit ipsum quaerat necessitatibus tempore voluptatum, eos excepturi aliquid doloribus, sapiente doloremque veniam maiores laudantium saepe.</p>
 </div>
<div>
<p className='text-xl font-medium mb-5'>COMPANY</p>
<ul className='flex flex-col gap-2 text-gray-500'>
  <li>Home</li>
<li>About</li>
<li>Contact</li>
<li>Careers</li></ul>

</div>

<div>
  <p className='text-xl font-medium mb-5'>
    GET IN TOUCH
  </p>
  <ul className='flex flex-col gap-2 text-gray-500'>
    <li>+1234567</li>
    <li>contact@mail.com</li>
    <li>123 Main St, City, Country</li>
  </ul>
</div>




    </div>
   <div>
  <hr />
  <p className='py-5 text-center text-sm '>&copy; 2023 Your Company. All rights reserved.</p>
</div> 
    </div>
  )
}

export default Footer
