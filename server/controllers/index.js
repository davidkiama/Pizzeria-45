import dotenv from "dotenv";
import CoinqvestClient from "coinqvest-merchant-sdk";

dotenv.config();

const COINQVEST_KEY = process.env.COINQVEST_KEY;
const COINQVEST_SECRET = process.env.COINQVEST_SECRET;

const client = new CoinqvestClient(COINQVEST_KEY, COINQVEST_SECRET);

export const createCustomer = (req, res) => {
  const { email } = req.body;

  client.post(
    "/customer",
    {
      customer: {
        email, // email is the only mandatory field
      },
    },
    function (response) {
      console.log(response.status);
      console.log(response.data);

      if (response.status !== 200) {
        // something went wrong, let's abort and debug by looking at our log file
        console.log("Could not create customer. Inspect above log entry.");
        return;
      }

      const customerId = response.data["customerId"]; // store this persistently in your database
      res.send(customerId); //I returned this so as to save in state in React
    }
  );
};

export const createCheckout = async (req, res) => {
  const { customerId, description, netAmount } = req.body;

  client.post(
    "/checkout/hosted",
    {
      charge: {
        customerId,
        currency: "USD",
        lineItems: [
          {
            description,
            netAmount,
          },
        ],
      },
      settlementCurrency: "BTC",
      links: {
        cancelUrl: "https://www.merchant.com/path/to/cancel/checkout",
        returnUrl: "https://www.merchant.com/path/to/complete/checkout",
      },
    },
    (response) => {
      if (response.status !== 200) {
        console.log("Could not create checkout");
        return;
      }
      const url = response.data["url"];

      res.send(url);
    }
  );
};
