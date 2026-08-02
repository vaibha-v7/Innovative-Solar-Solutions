import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCustomers } from "../services/getCustomer.service";

export default function AdminDashboard() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [search, setSearch] = useState("");
  const [sortByPincode, setSortByPincode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getAllCustomers();
        if (data.success) {
          setCustomers(data.data);
        } else {
          setErrorMsg("Failed to load customers.");
        }
      } catch (err) {
        setErrorMsg("Something went wrong while fetching customers.");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("isAdmin");
    navigate("/home");
  };

  const displayedCustomers = useMemo(() => {
    let result = [...customers];

    if (search.trim()) {
      const term = search.trim().toLowerCase();
      result = result.filter(
        (c) =>
          c.fullName?.toLowerCase().includes(term) ||
          c.email?.toLowerCase().includes(term) ||
          c.phone?.toLowerCase().includes(term) ||
          c.pincode?.toLowerCase().includes(term)
      );
    }

    if (sortByPincode) {
      result.sort((a, b) => a.pincode.localeCompare(b.pincode));
    }

    return result;
  }, [customers, search, sortByPincode]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Customer Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">
              {customers.length} total customer{customers.length !== 1 && "s"}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg border-2 border-gray-300 px-5 py-2 text-sm font-semibold text-gray-600 transition-all hover:border-primary hover:text-primary"
          >
            Logout
          </button>
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, phone, or pincode..."
            className="w-full  rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />

          <button
            onClick={() => setSortByPincode((prev) => !prev)}
            className={`flex items-center gap-1.5 rounded-lg border-2 px-4 py-1 text-sm font-semibold transition-all ${
              sortByPincode
                ? "border-primary bg-primary text-white"
                : "border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">sort</span>
            Sort by Pincode
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          {loading ? (
            <p className="p-8 text-center text-gray-500">Loading customers...</p>
          ) : errorMsg ? (
            <p className="p-8 text-center text-red-600">{errorMsg}</p>
          ) : displayedCustomers.length === 0 ? (
            <p className="p-8 text-center text-gray-500">No customers found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Name</th>
                    <th className="px-5 py-3 font-semibold">Email</th>
                    <th className="px-5 py-3 font-semibold">Phone</th>
                    <th className="px-5 py-3 font-semibold">Address</th>
                    <th className="px-5 py-3 font-semibold">Pincode</th>
                    <th className="px-5 py-3 font-semibold">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedCustomers.map((c) => (
                    <tr key={c._id} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-5 py-3 font-medium text-gray-800">{c.fullName}</td>
                      <td className="px-5 py-3 text-gray-600">{c.email}</td>
                      <td className="px-5 py-3 text-gray-600">{c.phone}</td>
                      <td className="px-5 py-3 text-gray-600">{c.address}</td>
                      <td className="px-5 py-3 text-gray-600">{c.pincode}</td>
                      <td className="px-5 py-3 text-gray-500">
                        {new Date(c.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}