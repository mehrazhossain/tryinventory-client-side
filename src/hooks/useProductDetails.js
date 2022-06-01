import { useState, useEffect } from 'react';

const useProductDetails = (productId) => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const url = `https://tryinventory-34050.herokuapp.com/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, [productId]);

  return [productDetails];
};

export default useProductDetails;
