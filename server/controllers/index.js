import dotenv from "dotenv";
import CoinqvestClient from "coinqvest-merchant-sdk";

dotenv.config();

const COINQVEST_KEY = process.env.COINQVEST_KEY;
const COINQVEST_SECRET = process.env.COINQVEST_SECRET;

const client = new CoinqvestClient(COINQVEST_KEY, COINQVEST_SECRET);

let customerId = "c9867d829a21";

export const createCustomer = async (req, res) => {
  // TEST WHEN CALLED
  console.log("//////////////////////////////////////////////////////");
  console.log("Create customer called");
  const { email } = req.body;
  console.log(email);
  try {
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

        customerId = response.data["customerId"]; // store this persistently in your database
        return customerId;
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const createCheckout = async (req, res) => {
  // TEST WHEN CALLED
  console.log("//////////////////////////////////////////////////////");
  console.log("Create checkout called");

  const { customerId, description, netAmount } = req.body;
  try {
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
      (r) => {
        if (r.status !== 200) {
          console.log("Could not create checkout");
          return;
        }
        const url = r.data["url"];

        console.log(url);
        return url;
      }
    );
  } catch (error) {
    console.log(error);
  }
};
