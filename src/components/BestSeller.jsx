import React, { useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopCOntext';
import { useContext } from  'react';
import Title from './Title';

const BestSeller = () => {
  const {products } = useContext(ShopContext);
const [BestSeller, setBestSSeller] = useState([]);

useEffect(()=>{
  const BestProducts=products.filter((product)=>product.isBestSeller);
  setBestSSeller(BestProducts.slice(0,4));
},[])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'Best '} text2={'Sellers'}></Title>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our most popular products</p>
      </div>
      
    </div>
  )
}

export default BestSeller
