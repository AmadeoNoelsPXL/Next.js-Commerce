import { useCallback, useEffect, useState } from "react";
import { getProductsByTag, createCart } from "../lib/shopify";
import FilterBar from "../components/FilterBar";
import FruitCard from "../components/FruitCard";
import { Product } from "../lib/shopify/types";

export default function Home() {
  const [filter, setFilter] = useState(undefined);
  const [product, setProducts] = useState([]);

  const handleButtonSelect = useCallback((buttonName) => {
    setFilter(buttonName);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsByTag(null, [], filter);
      setProducts(products);
    };
    fetchProducts();
  }, [filter]);

  return (
    <>
      <FilterBar onButtonSelect={handleButtonSelect} />
      <div className="mx-36 grid grid-cols-4">
        {product.map((fruit: Product) => (
          <FruitCard {...fruit} key={fruit.id} />
        ))}
      </div>
    </>
  );
}
