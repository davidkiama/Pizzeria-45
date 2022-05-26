import React from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <main class="main">
      <span class="btn order-btn">
        <Link to={"/order"}> Place you order</Link>
      </span>
      <div class="main-content">
        <h3 class="heading-3">Most popular pizza</h3>

        <div class="pizzas">
          <div class="pizza pizza-1">
            <img src="img/piz-1.jpg" alt="pizza-img" class="pizza__img" />
            <h4 class="heading-4 pizza__title"></h4>
            <ul class="pizza__desc">
              <li class="pizza__size">small</li>
              <li class="pizza__crust">Stuffed</li>
              <li class="pizza__toppings">Capsicum</li>
            </ul>
          </div>
          <div class="pizza pizza-2">
            <img src="img/piz-2.jpg" alt="pizza-img" class="pizza__img" />
            <h4 class="heading-4 pizza__title"></h4>
            <ul class="pizza__desc">
              <li class="pizza__size">small</li>
              <li class="pizza__crust">Stuffed</li>
              <li class="pizza__toppings">Capsicum</li>
            </ul>
          </div>
          <div class="pizza pizza-3">
            <img src="img/piz-3.jpg" alt="pizza-img" class="pizza__img" />
            <h4 class="heading-4 pizza__title"></h4>

            <ul class="pizza__desc">
              <li class="pizza__size">small</li>
              <li class="pizza__crust">Stuffed</li>
              <li class="pizza__toppings">Capsicum</li>
            </ul>
          </div>
          <div class="pizza pizza-4">
            <img src="img/piz-4.jpg" alt="pizza-img" class="pizza__img" />
            <h4 class="heading-4 pizza__title"></h4>
            <ul class="pizza__desc">
              <li class="pizza__size">small</li>
              <li class="pizza__crust">Stuffed</li>
              <li class="pizza__toppings">Capsicum</li>
            </ul>
          </div>
          <div class="pizza pizza-5">
            <img src="img/piz-5.jpg" alt="pizza-img" class="pizza__img" />
            <h4 class="heading-4 pizza__title"></h4>
            <ul class="pizza__desc">
              <li class="pizza__size">small</li>
              <li class="pizza__crust">Stuffed</li>
              <li class="pizza__toppings">Capsicum</li>
            </ul>
          </div>
          <div class="pizza pizza-6">
            <img src="img/piz-6.jpg" alt="pizza-img" class="pizza__img" />
            <h4 class="heading-4 pizza__title"></h4>
            <ul class="pizza__desc">
              <li class="pizza__size">small</li>
              <li class="pizza__crust">Stuffed</li>
              <li class="pizza__toppings">Capsicum</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
