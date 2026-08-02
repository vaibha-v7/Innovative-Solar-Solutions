import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ResidentialSolar from "./pages/ResidentialSolar";
import CommercialSolar from "./pages/CommercialSolar";
import AgriculturalSolar from "./pages/AgriculturalSolar";
import OnGridSystems from "./pages/OnGridSystems";
import OffGridSystems from "./pages/OffGridSystems";
import HybridSystems from "./pages/HybridSystems";
import ServicesFAQ from "./pages/ServicesFAQ";
import SavingsCalculator from "./pages/SavingsCalculator";
import Blog from "./pages/Blog";
import "./App.css";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    let cancelled = false;
    let attempts = 0;
    const maxAttempts = 20;

    const scrollToHash = () => {
      if (cancelled) return;

      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      if (attempts < maxAttempts) {
        attempts += 1;
        requestAnimationFrame(scrollToHash);
      }
    };

    scrollToHash();

    return () => {
      cancelled = true;
    };
  }, [pathname, hash]);

  return null;
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/residential"
          element={
            <Layout>
              <ResidentialSolar />
            </Layout>
          }
        />
        <Route
          path="/commercial"
          element={
            <Layout>
              <CommercialSolar />
            </Layout>
          }
        />
        <Route
          path="/agricultural"
          element={
            <Layout>
              <AgriculturalSolar />
            </Layout>
          }
        />
        <Route
          path="/on-grid"
          element={
            <Layout>
              <OnGridSystems />
            </Layout>
          }
        />
        <Route
          path="/off-grid"
          element={
            <Layout>
              <OffGridSystems />
            </Layout>
          }
        />
        <Route
          path="/hybrid"
          element={
            <Layout>
              <HybridSystems />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <ServicesFAQ />
            </Layout>
          }
        />
        <Route
          path="/calculator"
          element={
            <Layout>
              <SavingsCalculator />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />


      </Routes>
    </>
  );
}

export default App;



