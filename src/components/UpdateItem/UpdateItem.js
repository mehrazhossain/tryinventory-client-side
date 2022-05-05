import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';

const UpdateItem = () => {
  const { id } = useParams();
  const [productDetails] = useProductDetails(id);
  return (
    <div>
      <h2>Product Name: {productDetails.title}</h2>
    </div>
  );
};

export default UpdateItem;
