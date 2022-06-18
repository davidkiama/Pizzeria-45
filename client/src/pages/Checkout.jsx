import { useContext } from "react";

import { createCustomer, createCheckout } from "../actions";
import { OrderContext } from "../OrderContext";

function Checkout() {
  const { order, paymentInfo, setPaymentInfo } = useContext(OrderContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make the api call to create customer once email is entered

    const customerId = await createCustomer(paymentInfo);

    setPaymentInfo({
      ...paymentInfo,
      customerId: customerId,
      netAmount: order.totalPrice,
      description: "Test title desc",
    });

    const dataCheckout = await createCheckout(paymentInfo);
    console.log(dataCheckout);
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

            <h4 className="heading-4">Pay with</h4>
            <div className="icons">
              <img src="img/bitcoin.svg" alt="bitcoin" />
              <img src="img/litecoin.svg" alt="litecoin" />
              <img src="img/stellar.svg" alt="stellar" />
              <img src="img/ethereum.svg" alt="ethereum" />
            </div>

            <input type="submit" className="btn" value="Pay" />
          </form>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
