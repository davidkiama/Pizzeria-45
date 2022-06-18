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

  const [paymentInfo, setPaymentInfo] = useState({
    email: "",
    customerId: "",
    description: "",
    netAmount: "",
  });

  return (
    <OrderContext.Provider value={{ order, setOrder, paymentInfo, setPaymentInfo }}>
      {children}
    </OrderContext.Provider>
  );
};
