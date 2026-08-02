import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { verifyAdminCode } from "../services/admin.service";

export default function AdminLogin() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await verifyAdminCode(code);

      if (data.success) {
        sessionStorage.setItem("isAdmin", "true");
        navigate("/admin/dashboard");
      } else {
        setError("Incorrect code. Please try again.");
        setCode("");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Link
        to="/"
        className="absolute left-6 top-6 flex items-center gap-1.5 text-sm font-semibold text-gray-500 transition-all hover:text-primary"
      >
        <span className="material-symbols-outlined text-[20px]">
          arrow_back
        </span>
        Back to Home
      </Link>

      <div className="w-full rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
        <div className="mb-6 flex flex-col items-center text-center">
          <span className="material-symbols-outlined mb-2 text-4xl text-primary">
            admin_panel_settings
          </span>
          <h1 className="text-xl font-bold text-gray-800">Admin Access</h1>
          <p className="mt-1 text-sm text-gray-500">
            Enter the admin code to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter admin code"
            autoFocus
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B71C1C] active:scale-95 disabled:opacity-60"
          >
            {loading ? "Checking..." : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}