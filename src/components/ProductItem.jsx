
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import { Link } from 'react-router-dom';

const ProductItem = ({_id,image,name ,price}) => {
  const {currency}=useContext(ShopContext);

  return (
    <Link className='text-gray rounded-2xl cursor-pointer mx-auto' to={`/product/${_id}`}>
      <div className='overflow-hidden'>
        <img className='hover:scale-150 rounded-2xl border-2 border-gray-500 transition ease-in-out' src={image[0]} alt="" />
      </div>
      <p className='py-3 text-sm'>{name}</p>
      <p className='font-bold  text-lg '> {currency}{price}</p>
    </Link>
  )
}

export default ProductItem
