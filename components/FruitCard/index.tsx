import Image from "next/image";
import { useContext, useState } from "react";
import { addProduct, createCart } from "../../lib/shopify";
import { CartContext } from "../CartProvider";

export default function FruitCard({
  title,
  image,
  id,
  price,
  variantId,
  inventory,
}) {
  const { setCart, cart } = useContext(CartContext);

  async function handleClick() {
    if (!sessionStorage.getItem("cartId")) {
      await createCart().then((cart) => setCart(cart));
      addProduct(variantId).then((cart) => setCart(cart));
      console.log(cart);
    } else {
      addProduct(variantId).then((cart) => setCart(cart));
      console.log(cart);
    }
  }

  return (
    <div key={id} className="border border-green-300 p-4 grid grid-cols-1">
      <Image
        className=" object-fill h-40  block mx-auto"
        src={image}
        width={200}
        height={200}
        alt={title}
      />
      <div className=" px-14 pt-2 ">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <div>€ {price}</div>
        <button
          disabled={inventory == 0}
          className="mt-4 border border-blue-300 w-full bg-blue-300 text-white "
          onClick={() => handleClick()}
        >
          TOEVOEGEN
        </button>
      </div>
    </div>
  );
}
