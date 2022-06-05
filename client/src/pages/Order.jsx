import { useState, useContext } from "react";
import { Link } from "react-router-dom";
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
  const { order, setOrder } = useContext(OrderContext);
  const [activePage, setActivePage] = useState("order__page--1");

  const handleSubmit = (e) => {
    e.preventDefault();

    let subPrice = 0;
    for (let [, price] of Object.entries(order.subTotal)) {
      subPrice += price;
    }

    setOrder({ ...order, totalPrice: subPrice });

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
                setOrder({
                  ...order,
                  quantity: [e.target.value],
                  totalPrice: order.totalPrice * [e.target.value],
                });
              }}
            />
          </div>

          <div>
            <p>Total</p>
            <span className="sub__total">{order.totalPrice} </span>
          </div>
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
              setOrder({
                ...order,
                ingridients: { ...order.ingridients, [e.target.name]: e.target.value },
                subTotal: { ...order.subTotal, [e.target.name]: menu.toppings[e.target.value] },
              });
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
              setOrder({
                ...order,
                ingridients: { ...order.ingridients, [e.target.name]: e.target.value },
                subTotal: { ...order.subTotal, [e.target.name]: menu.crust[e.target.value] },
              });
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
              setOrder({
                ...order,
                ingridients: { ...order.ingridients, [e.target.name]: e.target.value },
                subTotal: { ...order.subTotal, [e.target.name]: menu.size[e.target.value] },
              });
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
          <h4 className="heading-4">Will it be delivered?</h4>
          <span className="radios">
            <input
              type="radio"
              name="deliver"
              value="yes"
              className="radio"
              onChange={() => setOrder({ ...order, deliveryFee: 200 })}
            />
            Yes
            <input
              type="radio"
              name="deliver"
              value="no"
              className="radio"
              onChange={() => setOrder({ ...order, deliveryFee: 0 })}
            />
            No
          </span>

          <hr />
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

            <p>
              <span>Delivery</span>
              <span>{order.deliveryFee} </span>
            </p>
            <p>
              <h2 className="heading-2">Total</h2>
              <span className="sub__total">Kes {order.totalPrice + order.deliveryFee}/= </span>
            </p>
          </span>
          <button
            className="btn"
            onClick={() => setOrder({ ...order, totalPrice: order.totalPrice + order.deliveryFee })}
          >
            <Link to="/checkout"> Order</Link>
          </button>
          <span className="receipt__back" onClick={() => setActivePage("order__page--1")}>
            &#171; Back
          </span>
        </div>
      </div>
    </main>
  );
}

export default Order;
