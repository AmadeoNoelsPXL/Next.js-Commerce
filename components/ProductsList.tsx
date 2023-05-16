import { createCart } from "../lib/shopify";
import FruitCard from "./FruitCard";

export default function ProductsList({ products }) {
  return (
    <div className="mx-36 mt-2 flex">
      {products.map((product) => (
        <FruitCard key={product.node.id} product={product} />
      ))}
    </div>
  );
}
