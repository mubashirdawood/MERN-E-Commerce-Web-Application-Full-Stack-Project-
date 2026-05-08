import { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { Link } from "react-router-dom";

const ProductItem = ({ id, _id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const productId = _id || id;

  return (
    <Link
      className="text-gray-700 cursor-pointer group"
      to={`/product/${productId}`}
    >
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-black/10">
        <img
          className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          src={image[0]}
          alt={name}
        />
      </div>
      <div className="pt-4 pb-2 px-1">
        <p className="text-sm font-medium text-gray-800 line-clamp-1 group-hover:text-black transition-colors">
          {name}
        </p>
        <div className="flex items-center justify-between mt-1">
          <p className="text-lg font-bold text-black lg:text-xl">
            {currency}{price}
          </p>
          <div className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
