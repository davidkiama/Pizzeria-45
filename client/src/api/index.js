import axios from "axios";

// const API_URL = "http://localhost:5000/transaction/";
const API_URL = "https://fathomless-cove-25106.herokuapp.com/";

export const createCustomer = (data) => axios.post(`${API_URL}customer`, data);
export const createCheckout = (data) => axios.post(`${API_URL}checkout`, data);
