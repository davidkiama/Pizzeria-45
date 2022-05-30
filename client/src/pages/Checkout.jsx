import { useContext } from "react";

import { OrderContext } from "../OrderContext";

function Checkout() {
  const { order } = useContext(OrderContext);
  return (
    <div className="order">
      <div className="pay-info ">
        <h4 className="heading-4">You will be required to pay {order.totalPrice} </h4>
      </div>
    </div>
  );
}

export default Checkout;
