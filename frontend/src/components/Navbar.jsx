import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const leaveTimeout = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navLinkClass = ({ isActive }) =>
    `relative text-[16px] font-semibold transition-all duration-300 ${
      isActive
        ? "text-primary after:absolute after:left-0 after:-bottom-2 after:h-[3px] after:w-full after:bg-primary"
        : "text-gray-700 hover:text-primary"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block rounded-lg px-4 py-3 transition-all duration-300 ${
      isActive
        ? "bg-red-50 text-primary font-semibold"
        : "text-gray-700 hover:bg-gray-100 hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

        
        <Link to="/" onClick={handleLinkClick}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHFPEP9RFOhIaQcGU6yld9zG9mRCTlUH7YHD_KrPu0n77oddV9f_pAtD8om5-FXw8zKZA5wDmbtCW-d7DZZMO39okI1j4LvwkJ_xt7Y4bJHkTMlRTTGTELzUdve9xo1q26GFLCbzfyCkj_2CcAfpv3VqD4m8pc0pLk6qAPwkrjysRjxg6uRZqSq8pdfGCrflokgE79BjW-pbusIEArNzsgCHcQUERllXx26fs57gj88YzMASvdfcABAB_aIgR-KYDYrw"
            alt="Innovative Solar Solutions"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">

          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          {/* Our Offerings dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (leaveTimeout.current) { clearTimeout(leaveTimeout.current); leaveTimeout.current = null; }
              setActiveDropdown("offerings");
            }}
            onMouseLeave={() => {
              // Delay hiding so small mouse slips don't immediately close the menu
              leaveTimeout.current = setTimeout(() => { setActiveDropdown(null); leaveTimeout.current = null; }, 200);
            }}
          >
            <button className="flex items-center gap-1 font-semibold text-gray-700 hover:text-primary transition-all duration-300">
              Our Offerings
              <span className="material-symbols-outlined text-[20px]">
                expand_more
              </span>
            </button>

            {activeDropdown === "offerings" && (
              <div className="absolute left-0 top-full mt-1 z-50 w-64 rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden">

                <NavLink
                  to="/residential"
                  className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-primary transition-all"
                >
                  Residential Solar
                </NavLink>

                <NavLink
                  to="/commercial"
                  className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-primary transition-all"
                >
                  Commercial Solar
                </NavLink>

                <NavLink
                  to="/agricultural"
                  className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-primary transition-all"
                >
                  Agricultural Projects
                </NavLink>

              </div>
            )}
          </div>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (leaveTimeout.current) { clearTimeout(leaveTimeout.current); leaveTimeout.current = null; }
              setActiveDropdown("services");
            }}
            onMouseLeave={() => {
              leaveTimeout.current = setTimeout(() => { setActiveDropdown(null); leaveTimeout.current = null; }, 200);
            }}
          >
            <button className="flex items-center gap-1 font-semibold text-gray-700 hover:text-primary transition-all duration-300">
              Services
              <span className="material-symbols-outlined text-[20px]">expand_more</span>
            </button>

            {activeDropdown === "services" && (
              <div className="absolute left-0 top-full mt-1 z-50 w-64 rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden">

                <NavLink
                  to="/services"
                  className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-primary transition-all"
                >
                  All Services
                </NavLink>

                <NavLink
                  to="/on-grid"
                  className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-primary transition-all"
                >
                  On-grid Systems
                </NavLink>

                <NavLink
                  to="/off-grid"
                  className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-primary transition-all"
                >
                  Off-grid Systems
                </NavLink>

                <NavLink
                  to="/hybrid"
                  className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-primary transition-all"
                >
                  Hybrid Systems
                </NavLink>

              </div>
            )}
          </div>

          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>

          <NavLink to="/calculator" className={navLinkClass}>
            Calculator
          </NavLink>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <button
            onClick={() => navigate("/#contact-section")}
            className="hidden md:block rounded-lg bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B71C1C] hover:shadow-xl active:scale-95"
          >
            Get in Touch
          </button>

          <button
            className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white shadow-lg md:hidden">

          <div className="space-y-1 p-4">

            <NavLink
              to="/"
              end
              className={mobileNavLinkClass}
              onClick={handleLinkClick}
            >
              Home
            </NavLink>

            <NavLink
              to="/residential"
              className={mobileNavLinkClass}
              onClick={handleLinkClick}
            >
              Residential Solar
            </NavLink>

            <NavLink
              to="/commercial"
              className={mobileNavLinkClass}
              onClick={handleLinkClick}
            >
              Commercial Solar
            </NavLink>

            <NavLink
              to="/agricultural"
              className={mobileNavLinkClass}
              onClick={handleLinkClick}
            >
              Agricultural Projects
            </NavLink>

            <NavLink
              to="/calculator"
              className={mobileNavLinkClass}
              onClick={handleLinkClick}
            >
              Calculator
            </NavLink>

            <NavLink
              to="/blog"
              className={mobileNavLinkClass}
              onClick={handleLinkClick}
            >
              Blog
            </NavLink>

            <button
              onClick={() => {
                navigate("/#contact-section");
                handleLinkClick();
              }}
              className="mt-4 w-full rounded-lg bg-primary py-3 font-semibold uppercase tracking-wide text-white transition-all hover:bg-[#B71C1C]"
            >
              Get in Touch
            </button>

          </div>
        </div>
      )}
    </header>
  );
}