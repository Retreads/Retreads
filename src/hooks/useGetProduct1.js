import { useEffect, useState } from "react";


const useGetProduct1 = (DATES) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(DATES)
      .then((res) => res.json())
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      });
  }, []);

  return  products;
};
export default useGetProduct1;
