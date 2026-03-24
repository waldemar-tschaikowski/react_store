import React, { createContext } from "react";


/* 
SetStateAction<number>	число ИЛИ функция
Dispatch	функция
Всё вместе	функция обновления state 

React.Dispatch<React.SetStateAction<number>>
это тип для функции setState
“функция, которая умеет обновлять число (state)”


*/

interface CartContextValue {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext<CartContextValue | undefined>(
  undefined,
);
