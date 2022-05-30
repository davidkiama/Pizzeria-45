import { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const nums = new Set();
while (nums.size !== 6) {
  nums.add(Math.floor(Math.random() * 6) + 1);
}

function Home() {
  const [imagesArr] = useState([...nums]);
  console.log(imagesArr);

  return (
    <main className="main">
      <span className="btn order-btn">
        <Link to={"/order"}> Place you order</Link>
      </span>
      <div className="main-content">
        <h3 className="heading-3">Most popular pizza</h3>

        <div className="pizzas">
          {imagesArr.map((imgInd) => {
            return (
              <div className="pizza" key={imgInd}>
                <img src={`img/piz-${imgInd}.jpg`} alt="pizza-img" className="pizza__img" />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Home;
