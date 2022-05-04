import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ photo }) => {
  const { id, title, url } = photo;
  return (
    <div>
      <Link
        to={`/product/${id}`}
        aria-label="View Item"
        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
      >
        <div className="flex flex-col h-full">
          <img src={url} alt="" />
          <div className="flex-grow border border-t-0 rounded-b">
            <div className="p-5">
              <h6 className="mb-2 font-semibold leading-5">{title}</h6>
              <p className="text-sm text-gray-900">
                Sportacus andrew weatherall goose Refined gentlemen super mario
                des lynam alpha trion zap rowsdower.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
