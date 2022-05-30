import { useContext } from "react";

import { OrderContext } from "../OrderContext";

function Checkout() {
  const { order } = useContext(OrderContext);
  return (
    <main className="main">
      <div className="order">
        <div className="pay-info ">
          <h4 className="heading-4">You will be required to pay Kes {order.totalPrice}/= </h4>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
