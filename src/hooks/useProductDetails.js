import { useState, useEffect } from 'react';

const useProductDetails = (productId) => {
  const [productDetails, setProductDetails] = useState([]);
  console.log(productDetails);

  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, [productId]);

  return [productDetails];
};

export default useProductDetails;
