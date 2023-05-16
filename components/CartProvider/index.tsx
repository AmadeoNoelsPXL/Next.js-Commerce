import { createContext, useState } from "react";
import { Cart } from "../../lib/shopify/types";

type CartContextType = {
  cart: Cart;
  setCart: (cart: Cart) => void;
};

const c: Cart = {
  id: "",
  subtotal: 0,
  lines: [],
};

export const CartContext = createContext<CartContextType>({
  cart: c,
  setCart: () => {},
});

export default function CartProvider({ children }) {
  const [cart, setCart] = useState<Cart>(c);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
