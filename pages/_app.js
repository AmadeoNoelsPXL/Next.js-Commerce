import "../styles/globals.css";
import NavBar from "../components/NavBar";
import CartProvider from "../components/CartProvider";
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <NavBar />
      <Component {...pageProps} />;
    </CartProvider>
  );
}
