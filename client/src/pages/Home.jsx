import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  const getPizza = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/food/products/search?apiKey=${process.env.REACT_APP_API_KEY}&query=pizza`
    );

    const results = await data.json();
    console.log(results.products);
    setPizzas(results.products);
  };

  useEffect(() => {
    getPizza();
    console.log(pizzas);
  }, []);

  return (
    <main className="main">
      <span className="btn order-btn">
        <Link to={"/order"}> Place you order</Link>
      </span>
      <div className="main-content">
        <h3 className="heading-3">Most popular pizza</h3>

        {/* <div className="pizzas">
          {pizzas.map((pizza) => {
            return (
              <div className="pizza" key={pizza.id}>
                <img src={pizza.image} alt="pizza-img" className="pizza__img" />
                <h4 className="heading-4 pizza__title"></h4>
              </div>
            );
          })}
        </div> */}
      </div>
    </main>
  );
}

export default Home;
