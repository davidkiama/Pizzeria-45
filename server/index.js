import express from "express";
import dotenv from "dotenv";
import CoinqvestClient from "coinqvest-merchant-sdk";

dotenv.config();
const app = express();

const PORT = process.env.PORT;
const COINQVEST_KEY = process.env.COINQVEST_KEY;
const COINQVEST_SECRET = process.env.COINQVEST_SECRET;

app.get("/", (req, res) => res.send("Home page"));

const client = new CoinqvestClient(COINQVEST_KEY, COINQVEST_SECRET);

let customerId = "c9867d829a21";

// client.post(
//   "/customer",
//   {
//     customer: {
//       email: "daaudimgaza@gmail.com",
//     },
//   },
//   function (response) {
//     console.log(response.status);
//     console.log(response.data);

//     if (response.status !== 200) {
//       // something went wrong, let's abort and debug by looking at our log file
//       console.log("Could not create customer. Inspect above log entry.");
//       return;
//     }

//     customerId = response.data["customerId"]; // store this persistently in your database
//   }
// );

console.log(customerId);

const r = client.post(
  "/checkout/hosted",
  {
    charge: {
      customerId: customerId,
      currency: "USD",
      lineItems: [
        {
          description: `Topping up account`,
          netAmount: 20,
        },
      ],
    },
    settlementCurrency: "BTC",
    links: {
      cancelUrl: "https://www.merchant.com/path/to/cancel/checkout",
      returnUrl: "https://www.merchant.com/path/to/complete/checkout",
    },
  },
  (r) => {
    if (r.status !== 200) {
      console.log("Could not create checkout");
      return;
    }
    const url = r.data["url"];
    console.log(url);
  }
);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
