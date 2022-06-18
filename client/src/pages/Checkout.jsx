import { useContext } from "react";
import { createCustomer } from "../actions";

import { OrderContext } from "../OrderContext";

function Checkout() {
  const { order, paymentInfo, setPaymentInfo } = useContext(OrderContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make the api call to create customer once email is entered

    createCustomer(paymentInfo);
  };

  return (
    <main className="main">
      <div className="order">
        <div className="pay-info ">
          <h4 className="heading-4">You will be required to pay Kes {order.totalPrice}/= </h4>

          <form className="payment" onSubmit={handleSubmit}>
            <label htmlFor="email">Enter your email</label>
            <input
              type="email"
              name="email"
              required
              onChange={(e) => setPaymentInfo({ ...paymentInfo, email: e.target.value })}
            />

            <input type="submit" className="btn" value="Pay" />
          </form>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
