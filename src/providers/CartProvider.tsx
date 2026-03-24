import { useState, type FC, type ReactNode } from "react";
import { CartContext } from "../context/CartContext";

/*
 type Props = {
  children: ReactNode;
}; 
export const CartProvider = ({ children }: Props) => {
-------------------------
Потому что это объект пропсов
{ children: ReactNode } 
 ----------------
 ReactNode — это всё, что React умеет рендерить:

JSX (<div />)
строки ("hello")
числа (123)
массивы
фрагменты
*/
export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CartContext.Provider value={{ count, setCount }}>
      {children}
    </CartContext.Provider>
  );
};
