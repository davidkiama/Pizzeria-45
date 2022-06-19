import { useContext, useEffect } from "react";

import { createCustomer, createCheckout } from "../actions";
import { OrderContext } from "../OrderContext";

function Checkout() {
  const { order, paymentInfo, setPaymentInfo } = useContext(OrderContext);

  useEffect(() => {
    const createTrx = async () => {
      const paymentUrl = await createCheckout(paymentInfo);
      // if (paymentUrl) console.log(paymentUrl);
      if (paymentUrl) window.location.replace(paymentUrl);
    };
    if (paymentInfo.description) createTrx(); // call this function only when state updates
  }, [paymentInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make the api call to create customer once email is entered

    const email = new FormData(e.target).get("email");

    const customerId = await createCustomer({ email });

    setPaymentInfo({
      ...paymentInfo,
      email: email,
      customerId: customerId,
      netAmount: order.totalPrice,
      description: ` ${order.ingridients.toppings}, ${order.ingridients.crust} pizza. Size - ${order.ingridients.size}`,
    });

    console.log(order.ingridients);
  };

  return (
    <main className="main">
      <div className="order">
        <div className="pay-info ">
          <h4 className="heading-4">You will be required to pay $ {order.totalPrice}</h4>

          <form className="payment" onSubmit={handleSubmit}>
            <label htmlFor="email">Enter your email</label>
            <input type="email" name="email" required />

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
