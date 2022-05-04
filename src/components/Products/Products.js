import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block"></span> Inventory Product
        </h2>
      </div>
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {photos.slice(0, 6).map((photo) => (
          <Product key={photos.id} photo={photo}></Product>
        ))}
      </div>
      <div className="text-center">
        <Link
          to="/manage-inventory"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
        >
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default Products;
