import React from "react";

function Order() {
  return (
    <main class="main main--order">
      <div class="order-totals">
        <div class="order-totals--pizza">
          <div>
            <p>Quantity</p>
            <input type="number" class="quantity" placeholder="1" />
          </div>

          <div>
            <p>Ingridients</p>
            <span class="ingridients">
              <i class="ing__toppings"></i>
              <i class="ing__crust"></i>
              <i class="ing__size"></i>
            </span>
          </div>

          <div>
            <p>Total</p>
            <span class="sub__total">0</span>
          </div>
        </div>

        <div class="order-totals--delivery hidden">
          <span>Delivery fees</span>
          <span class="sub__total"></span>
        </div>

        <div class="order-totals--totals hidden">
          <h2 class="heading-2">Total</h2>
          <span class="sub__total"></span>
        </div>
      </div>

      <div class="order">
        <h2 class="heading-2 order__heading">Order Pizza</h2>
        <form class="form order__form">
          <label>Toppings</label>
          <select class="form__input order-toppings" required>
            <option></option>
            <option value="pepperoni">Pepperoni</option>
            <option value="mushroom">Mushroom</option>
            <option value="extraCheese">Extra cheese</option>
            <option value="sausage">Sausage</option>
          </select>

          <label>Crust</label>
          <select class="form__input order-crust" required>
            <option></option>
            <option value="stuffed">Stuffed</option>
            <option value="crispy">Crispy</option>
            <option value="gluttenFree">Glutten-free</option>
          </select>

          <label>Size</label>
          <select class="form__input order-size" required>
            <option></option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>

          <input type="submit" class="btn" value="Order" />
        </form>

        <div class="delivery hidden">
          <h4 class="heading-4">Would you like it to be delivered</h4>
          <input type="radio" name="deliver" value="yes" class="radio" />
          Yes
          <br />
          <input type="radio" name="deliver" value="no" class="radio" />
          No
          <br />
        </div>

        <button class="btn hidden checkout">Proceed to checkout</button>
      </div>
    </main>
  );
}

export default Order;
