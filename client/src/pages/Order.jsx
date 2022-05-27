import React from "react";
import { useContext } from "react";
import { OrderContext } from "../OrderContext";

const menu = {
  toppings: {
    pepperoni: 200,
    mushroom: 150,
    extraCheese: 300,
    sausage: 300,
  },
  crust: {
    stuffed: 200,
    crispy: 450,
    gluttenFree: 350,
  },
  size: {
    small: 500,
    medium: 750,
    large: 900,
  },
};

function Order() {
  const { order, placeOrder } = useContext(OrderContext);

  let quantity = order.quantity;
  let ingridients = order.ingridients;
  let totalPrice = order.totalPrice;
  let subTotal = order.subTotal;

  const handleSubmit = (e) => {
    e.preventDefault();

    totalPrice = subTotal * quantity;

    placeOrder(quantity, ingridients, subTotal, totalPrice);
  };
  return (
    <main className="main main--order">
      <div className="order-totals">
        <div className="order-totals--pizza">
          <div>
            <p>Quantity</p>
            <input
              type="number"
              className="quantity"
              placeholder="1"
              onChange={(e) => {
                quantity = [e.target.value];
              }}
            />
          </div>

          <div>
            <p>Ingridients</p>
            <span className="ingridients">
              <i className="ing__toppings"></i>
              <i className="ing__crust"></i>
              <i className="ing__size"></i>
            </span>
          </div>

          <div>
            <p>Total</p>
            <span className="sub__total"> {order.totalPrice} </span>
          </div>
        </div>

        <div className="order-totals--delivery hidden">
          <span>Delivery fees</span>
          <span className="sub__total"></span>
        </div>

        <div className="order-totals--totals hidden">
          <h2 className="heading-2">Total</h2>
          <span className="sub__total"></span>
        </div>
      </div>

      {/* ON change I want to get the ingridient and also the price of the ingridient */}
      <div className="order">
        <h2 className="heading-2 order__heading">Order Pizza</h2>
        <form className="form order__form" onSubmit={handleSubmit}>
          <label>Toppings</label>
          <select
            className="form__input order-toppings"
            required
            onChange={(e) => {
              ingridients = [...ingridients, e.target.value];
              subTotal = subTotal + menu.toppings[e.target.value];
            }}
          >
            <option></option>
            <option value="pepperoni">Pepperoni</option>
            <option value="mushroom">Mushroom</option>
            <option value="extraCheese">Extra cheese</option>
            <option value="sausage">Sausage</option>
          </select>

          <label>Crust</label>
          <select
            className="form__input order-crust"
            required
            onChange={(e) => {
              ingridients = [...ingridients, e.target.value];

              subTotal = subTotal + menu.crust[e.target.value];
            }}
          >
            <option></option>
            <option value="stuffed">Stuffed</option>
            <option value="crispy">Crispy</option>
            <option value="gluttenFree">Glutten-free</option>
          </select>

          <label>Size</label>
          <select
            className="form__input order-size"
            required
            onChange={(e) => {
              ingridients = [...ingridients, e.target.value];
              subTotal = subTotal + menu.size[e.target.value];
            }}
          >
            <option></option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>

          <input type="submit" className="btn" value="Order" />
        </form>

        <div className="delivery hidden">
          <h4 className="heading-4">Would you like it to be delivered</h4>
          <input type="radio" name="deliver" value="yes" className="radio" />
          Yes
          <br />
          <input type="radio" name="deliver" value="no" className="radio" />
          No
          <br />
        </div>

        <button className="btn hidden checkout">Proceed to checkout</button>
      </div>
    </main>
  );
}

export default Order;
