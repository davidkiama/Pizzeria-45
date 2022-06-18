import * as api from "../api";

export const createCustomer = async (body) => {
  console.log(body);
  try {
    const data = await api.createCustomer(body);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const createCheckout = async (body) => {
  try {
    const data = await api.createCheckout(body);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};