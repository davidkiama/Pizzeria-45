import { useState, useContext } from "react";

import { OrderContext } from "../OrderContext";

import "./Order.css";

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
  const [activePage, setActivePage] = useState("order__page--1");

  let quantity = order.quantity;
  let ingridients = order.ingridients;
  let totalPrice = order.totalPrice;
  let subTotal = order.subTotal;

  const handleSubmit = (e) => {
    e.preventDefault();

    totalPrice = 0; //reset it anytime we recalculate
    for (const [, price] of Object.entries(subTotal)) totalPrice += price;
    totalPrice = totalPrice * quantity;

    placeOrder(quantity, ingridients, subTotal, totalPrice);

    //if forms submit switch to other page
    setActivePage("order__page--2");
  };
  return (
    <main className="main main--order">
      <div className="order-totals">
        <div className="order-totals--pizza">
          <div>
            <p>Quantity</p>
            <input
              type="number"
              defaultValue={1}
              className="quantity"
              onChange={(e) => {
                quantity = [e.target.value];
              }}
            />
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
        <form
          className={`${
            activePage === "order__page--1" ? "active" : ""
          } order__form order__page order__page--1`}
          onSubmit={handleSubmit}
        >
          <h2 className="heading-2 order__heading">Order Pizza</h2>
          <label>Toppings</label>
          <select
            className="form__input order-toppings"
            name="toppings"
            required
            onChange={(e) => {
              ingridients = { ...ingridients, [e.target.name]: e.target.value };
              subTotal = { ...subTotal, [e.target.name]: menu.toppings[ingridients.toppings] };
            }}
          >
            <option></option>
            {Object.keys(menu.toppings).map((menuItem) => (
              <option value={menuItem}>{menuItem}</option>
            ))}
          </select>

          <label>Crust</label>
          <select
            className="form__input order-crust"
            name="crust"
            required
            onChange={(e) => {
              ingridients = { ...ingridients, [e.target.name]: e.target.value };

              subTotal = { ...subTotal, [e.target.name]: menu.crust[ingridients.crust] };
            }}
          >
            <option></option>
            {Object.keys(menu.crust).map((menuItem) => (
              <option value={menuItem}>{menuItem}</option>
            ))}
          </select>

          <label>Size</label>
          <select
            className="form__input order-size"
            required
            name="size"
            onChange={(e) => {
              ingridients = { ...ingridients, [e.target.name]: e.target.value };
              subTotal = { ...subTotal, [e.target.name]: menu.size[ingridients.size] };
            }}
          >
            <option></option>
            {Object.keys(menu.size).map((menuItem) => (
              <option value={menuItem}>{menuItem}</option>
            ))}
          </select>

          <input type="submit" className="btn" value="Checkout" />
        </form>

        {/* Page 2 */}
        <div
          className={` ${activePage === "order__page--2" ? "active" : ""} receipt order__page order__page--2`}
        >
          <h4 className="heading-4">Would you like it to be delivered</h4>
          <input type="radio" name="deliver" value="yes" className="radio" />
          Yes
          <br />
          <input type="radio" name="deliver" value="no" className="radio" />
          No
          <br />
          <span className="ingridients">
            <p>
              <i className="ing__toppings">{order.ingridients.toppings}</i>
              <span>{order.subTotal.toppings}</span>
            </p>
            <p>
              <i className="ing__crust">{order.ingridients.crust}</i>
              <span>{order.subTotal.crust}</span>
            </p>
            <p>
              <i className="ing__size">{order.ingridients.size}</i>
              <span>{order.subTotal.size}</span>
            </p>
          </span>
          <button className="btn">0rder</button>
          <span className="receipt__back" onClick={() => setActivePage("order__page--1")}>
            &#171; Back
          </span>
        </div>
      </div>
    </main>
  );
}

export default Order;