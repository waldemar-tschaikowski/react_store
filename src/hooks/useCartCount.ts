import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function useCartCount() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext should be used inside CartProvider");
  }

  const {count, setCount} = context;

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  
  function clear() {
    setCount(0);
  }

  return { increment, decrement, clear, count };
}
