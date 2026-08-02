const API_URL = import.meta.env.VITE_BACKEND_URL;

export const verifyAdminCode = async (code) => {
  const res = await fetch(`${API_URL}/admin/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });
  return res.json();
};