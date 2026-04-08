
import { useContext } from 'react';
import { ShopContext } from '../context/ShopCOntext';
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name ,price}) => {
  const {currency}=useContext(ShopContext);

  return (
    <Link className='text-gray cursor-pointer mx-auto' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img className='hover transition ease-in-out' src={image[0]} alt="" />
      </div>
      <p className='py-3 text-sm'>{name}</p>
      <p className='font-bold text-lg'> {currency}{price}</p>
    </Link>
  )
}

export default ProductItem
