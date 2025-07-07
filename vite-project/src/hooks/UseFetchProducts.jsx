import { useEffect, useState } from 'react';

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
//fetching api//
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch(() => setError('Failed to fetch products'));
  }, []);

  if (error) console.error(error);

  return products;
}

export default useFetchProducts;