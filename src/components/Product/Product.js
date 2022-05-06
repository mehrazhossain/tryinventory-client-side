import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { _id, name, image, description } = product;
  const shortDesc = description.substring(0, 120) + ' ...';
  return (
    <div>
      <Link
        to={`/product/${_id}`}
        aria-label="View Item"
        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
      >
        <div className="flex flex-col h-full">
          <img src={image} className="object-none h-80 w-96" alt="" />
          <div className="flex-grow border border-t-0 rounded-b">
            <div className="p-5">
              <h6 className="mb-2 font-semibold leading-5">{name}</h6>
              <p className="text-sm text-gray-900">{shortDesc}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
