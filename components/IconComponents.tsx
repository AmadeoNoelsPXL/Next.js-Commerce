import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartComponent from "./NavBar/CartComponent";

export default function NavBarIconComponents() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="flex justify-end items-center">
      <Link href={`/`} className="px-4">
        <Image src={"/user.png"} width={20} height={20} alt="user" />
      </Link>
      <button onClick={handleCartClick} className="px-4">
        <Image src={"/shoppingCart.png"} width={20} height={20} alt="user" />
      </button>
      {isCartOpen && <CartComponent isCartOpen={setIsCartOpen} />}
    </div>
  );
}
