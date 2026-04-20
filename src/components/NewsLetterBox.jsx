import React from 'react'

const NewsLetterBox = () => {

  const onSubmitHandler=(e)=>{
    e.preventDefault();//not reload page on submit

  }

  return (
    <div className='text-center'>
     <p className='text-2xl font-bold text-gray-700 '>Subscribe to our newsletter and get 10% off your first purchase</p>
    <p className='text-gray-500  mt-3'>Enter your email address to stay updated with our latest news and offers.</p>
    <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 my-6 mx-auto'>
      <input className='sm:flex-1 outline-none w-full' type="email "placeholder='Enter your email' required />
      <button type='submit' className='bg-black rounded-2xl text-white px-10 py-2 mt-4 hover:bg-gray-600'>Subscribe</button>
    </form>
    
    </div>
  )
}

export default NewsLetterBox
