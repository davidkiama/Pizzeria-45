import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({ quantity: 1, ingridients: {}, subTotal: {}, totalPrice: 0 });

  const placeOrder = (quantity, ingridients, subTotal, totalPrice) => {
    setOrder({ quantity, ingridients, subTotal, totalPrice });
  };

  return <OrderContext.Provider value={{ order, placeOrder }}>{children}</OrderContext.Provider>;
};
