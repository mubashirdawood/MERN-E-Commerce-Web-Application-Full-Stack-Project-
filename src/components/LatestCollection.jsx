import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopCOntext'
import Title from './Title';

const LatestCollection = () => {
   const {products}=useContext(ShopContext);

   


  return (
    <div className='my-10 '>
      <div className='py-8 text-3xl text-center'>
          <Title text1={"Latest"} text2={" Collection"}></Title>
      </div>
      
    </div>
  )
}

export default LatestCollection
