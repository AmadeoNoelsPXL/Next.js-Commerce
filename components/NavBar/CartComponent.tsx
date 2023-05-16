import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../CartProvider";
import { updateProduct } from "../../lib/shopify";
import router from "next/router";

export default function CartComponent({ isCartOpen }) {
  const { cart } = useContext(CartContext);
  const [buyed, setBuyed] = useState(true);
  const { setCart } = useContext(CartContext);

  return (
    <div>
      <div className="absolute top-24 border-2 right-1 border-gray p-4 bg-white ">
        <div>
          <h1 className=" text-black ">Winkelwagen</h1>
          {cart.lines.map((product) => (
            <div className="py-4 grid grid-cols-3 my-2">
              <div className="border-2 w-20 h-20 "></div>
              <div className="grid grid-rows-2">
                <div className="">{product.title}</div>
                <div className=" self-end ">aantal: {product.quantity}</div>
              </div>
              <div className="grid grid-rows-2">
                <div className=" place-self-end self-start ">
                  € {product.price}
                </div>
                <div className=" self-end">
                  <div className="flex justify-end space-x-2">
                    <button
                      className=" border-2 w-8 h-8 group hover:border-green-500 border-gray-700"
                      onClick={() => {
                        updateProduct(
                          product.lineId!,
                          product.quantity!,
                          true,
                          product.variantId
                        ).then((cart) => setCart(cart));
                      }}
                    >
                      <PlusIcon className=" text-gray-700 group-hover:text-green-500" />
                    </button>
                    <button
                      className=" border-2 w-8 h-8 group hover:border-red-800 border-gray-700"
                      onClick={() => {
                        updateProduct(
                          product.lineId!,
                          product.quantity!,
                          false,
                          product.variantId
                        ).then((cart) => setCart(cart));
                      }}
                    >
                      <TrashIcon className=" text-gray-700 group-hover:text-red-800 " />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-2">
            <div className="">Totaal</div>
            <div className=" place-self-end">{cart.subtotal}</div>
          </div>
          <button
            className="w-full border-2 text-white border-blue-200 bg-blue-300 mt-4"
            onClick={() => {
              isCartOpen(false);
              router.push("/checkout");
            }}
          >
            AFREKENEN
          </button>
        </div>
      </div>
    </div>
  );
}
