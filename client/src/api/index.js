import axios from "axios";

const API_URL = "http://localhost:5000/transaction/";

export const createCustomer = (data) => axios.post(`${API_URL}customer`, data);
export const createCheckout = (data) => axios.post(`${API_URL}checkout`, data);
