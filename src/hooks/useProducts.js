import { useState, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [Reload, setReload] = useState(true);

  useEffect(() => {
    fetch('https://tryinventory-34050.herokuapp.com/product')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setReload(false);
      });
  }, []);

  return [products, Reload, setProducts];
};

export default useProducts;
