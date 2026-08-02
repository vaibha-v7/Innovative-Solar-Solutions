import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const createCustomer = async (customerData) => {
  return API.post("/customers", customerData);
};