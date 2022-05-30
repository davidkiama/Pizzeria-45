import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({
    quantity: 1,
    ingridients: {},
    subTotal: {},
    totalPrice: 0,
    deliveryFee: 0,
  });

  return <OrderContext.Provider value={{ order, setOrder }}>{children}</OrderContext.Provider>;
};
