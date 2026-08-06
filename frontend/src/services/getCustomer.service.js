const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getAllCustomers = async () => {
  const res = await fetch(`${API_URL}/customers`);
  return res.json();
};