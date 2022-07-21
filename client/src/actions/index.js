import * as api from "../api";

export const createCustomer = async (body) => {
  try {
    const { data } = await api.createCustomer(body);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createCheckout = async (body) => {
  try {
    const { status, data } = await api.createCheckout(body);
    return { status, data };
  } catch (error) {
    console.log(error);
  }
};
