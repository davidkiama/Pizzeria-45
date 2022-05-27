import { BrowserRouter, Route, Routes } from "react-router-dom";

import { OrderProvider } from "./OrderContext";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Order from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      <OrderProvider>
        <Header />

        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/order" exact element={<Order />}></Route>
        </Routes>
        <Footer />
      </OrderProvider>
    </BrowserRouter>
  );
}

export default App;
