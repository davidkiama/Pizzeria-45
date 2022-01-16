"use strict";

const header = document.querySelector(".header");
const orderForm = document.querySelector(".order__form");
const subTotal = document.querySelector(".sub__total");
const selectTags = document.querySelectorAll("select");
const ingToppings = document.querySelector(".ing__toppings");
const ingCrust = document.querySelector(".ing__crust");
const ingSize = document.querySelector(".ing__size");
const deliveryFee = document
  .querySelector(".order-totals--delivery")
  .querySelector(".sub__total");
const totalFinal = document
  .querySelector(".order-totals--totals")
  .querySelector(".sub__total");
const radios = document.querySelectorAll(".radio");

//Dynamic content
header.innerHTML = `<h1 class="heading-1"><a href="index.html">Pizzeria-45</a></h1>`;

//Constructor
const Order = function (toppings, crust, size) {
  this.toppings = toppings;
  this.crust = crust;
  this.size = size;
};

let completeOrder = {};
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

const changeOrder = function (ingrident) {
  const value = ingrident.value;

  if (ingrident.classList.contains("order-toppings")) {
    ingToppings.textContent = value;
  }
  if (ingrident.classList.contains("order-crust")) {
    ingCrust.textContent = value;
  }
  if (ingrident.classList.contains("order-size")) {
    ingSize.textContent = value;
  }
};

selectTags.forEach((select) => {
  select.addEventListener("change", () => {
    changeOrder(select);
  });
});

const orderTotal = function (toppings, crust, size) {
  let quantity = document.querySelector(".quantity");
  const subTotal =
    menu.toppings[toppings] + menu.crust[crust] + menu.size[size];

  quantity.value ? (quantity = parseInt(quantity.value)) : (quantity = 1);

  return subTotal * quantity;
};

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const toppings = document.querySelector(".order-toppings").value;
  const crust = document.querySelector(".order-crust").value;
  const size = document.querySelector(".order-size").value;

  const myOrder = new Order(toppings, crust, size);
  completeOrder.order = myOrder;

  subTotal.textContent = `${orderTotal(toppings, crust, size)}`;
  document.querySelector(".delivery").classList.remove("hidden");
});

const totalCalc = () => {
  totalFinal.textContent =
    parseInt(deliveryFee.textContent) + parseInt(subTotal.textContent);

  document.querySelector(".order-totals--delivery").classList.remove("hidden");
  document.querySelector(".order-totals--totals").classList.remove("hidden");
  document.querySelector(".checkout").classList.remove("hidden");
};

radios.forEach((radio) => {
  radio.addEventListener("click", () => {
    const val = radio.value;
    if (val == "yes") {
      deliveryFee.textContent = 300;
      const location = prompt("Where do you want it to be delivered ?");
      alert(`Your pizza will be delivered at ${location}`);
      completeOrder.location = location;
      completeOrder.deliveryFee = deliveryFee.textContent;
    }
    if (val == "no") {
      deliveryFee.textContent = 0;
      completeOrder.location = null;
      completeOrder.deliveryFee = null;
    }

    totalCalc();
  });
});

//save the order plus delivery info to localstorage

document.querySelector(".checkout").addEventListener("click", () => {
  console.log(completeOrder);
});
