import { useState } from "react";

export default function AgriculturalSolar() {
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.phone) {
      setQuoteSubmitted(true);
      setTimeout(() => {
        setQuoteSubmitted(false);
        setFormData({ fullName: "", email: "", phone: "" });
      }, 5000);
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden py-12">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8sQOnlAVsWss-J7ynM2qb01iii7Naxq-fHHp2Mv9KZA2K5N6dvsAjq-JDk1OPxa30uhqu2WMMBHHQRISNqil_CuMnaR5RxLpEilwvrGNoc-hjZ_8AT3NqAvuHD3K1W7Rom_aGAou-rEMCSGYorU3ok-j4MXRLlky_AMhm37ZmWKh1BIqISjAmAg8AVo0vlILsKkg9zayhjO8x8gz1TyFw6N7n8frLqTt9xm69UW6N-okhnndKeZA7")`,
              filter: "brightness(0.5)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-margin-desktop w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="max-w-2xl text-left">
              <h1 className="text-display-lg font-display-lg text-white mb-md">
                Solar for Your Farm <span className="text-primary-container">Made Easy</span>
              </h1>
              <p className="text-body-lg font-body-lg text-white/90 mb-lg">
                Turn your land into a high-energy asset with simple, expert solutions.
              </p>
              <ul className="flex flex-col gap-sm mb-lg">
                <li className="flex items-center gap-sm text-white font-body-md">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  24x7 monitoring
                </li>
                <li className="flex items-center gap-sm text-white font-body-md">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  Government support
                </li>
                <li className="flex items-center gap-sm text-white font-body-md">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  Live monitoring
                </li>
                <li className="flex items-center gap-sm text-white font-body-md">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  Expert Maintenance
                </li>
                <li className="flex items-center gap-sm text-white font-body-md">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  Max energy generation
                </li>
              </ul>
              <div className="flex flex-wrap gap-md">
                <button
                  onClick={() => {
                    const element = document.getElementById("advantages-section");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-primary text-on-primary px-lg py-md rounded font-headline-md hover:scale-105 active:scale-95 transition-all text-center"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Farm Quote Form */}
            <div className="bg-surface rounded-xl p-xl shadow-lg border border-outline-variant text-left mt-8 md:mt-0">
              <h3 className="text-headline-md font-display-lg text-on-surface mb-md font-bold">
                GET A FREE QUOTE
              </h3>
              {quoteSubmitted ? (
                <div className="p-md bg-green-50 text-green-800 rounded-md border border-green-200">
                  <p className="font-bold">Agricultural Quote Request Received!</p>
                  <p className="text-sm mt-1">Our solar technicians will assess your land boundary and draft a feasibility report within 2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-md">
                  <div className="flex flex-col gap-xs">
                    <label className="text-label-bold text-on-surface-variant font-bold">Name</label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-sm rounded border border-outline-variant bg-surface-container-low focus:outline-primary outline-none"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="text-label-bold text-on-surface-variant font-bold">Email</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-sm rounded border border-outline-variant bg-surface-container-low focus:outline-primary outline-none"
                      placeholder="your@email.com"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="text-label-bold text-on-surface-variant font-bold">Phone</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-sm rounded border border-outline-variant bg-surface-container-low focus:outline-primary outline-none"
                      placeholder="(555) 000-0000"
                      type="tel"
                    />
                  </div>
                  <button
                    className="bg-primary text-on-primary px-lg py-md rounded-lg font-headline-md transition-transform hover:scale-105 mt-md cursor-pointer font-bold"
                    type="submit"
                  >
                    GET A QUOTE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Farming Section / Advantages & Process */}
      <section className="py-xl bg-inverse-surface text-white text-left" id="advantages-section">
        <div className="max-w-7xl mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
            {/* Column 1: Advantages */}
            <div className="flex flex-col gap-lg">
              <h2 className="text-headline-lg font-display-lg mb-md font-bold text-white">
                Advantages of Agricultural Solar
              </h2>
              <div className="grid grid-cols-1 gap-md">
                <div className="flex items-start gap-md">
                  <span className="material-symbols-outlined text-primary-container text-headline-md mt-1">payments</span>
                  <div>
                    <h4 className="font-label-bold text-white font-bold">Reduced Operational Costs</h4>
                    <p className="text-body-md text-white/70">
                      Significantly lower your monthly utility bills and lock in energy rates for decades.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <span className="material-symbols-outlined text-primary-container text-headline-md mt-1">eco</span>
                  <div>
                    <h4 className="font-label-bold text-white font-bold">Sustainability & Brand Value</h4>
                    <p className="text-body-md text-white/70">
                      Enhance your farm's reputation as an eco-friendly producer with clean energy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <span className="material-symbols-outlined text-primary-container text-headline-md mt-1">bolt</span>
                  <div>
                    <h4 className="font-label-bold text-white font-bold">Energy Independence</h4>
                    <p className="text-body-md text-white/70">
                      Protect your operations from grid outages and fluctuating energy market prices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <span className="material-symbols-outlined text-primary-container text-headline-md mt-1">landscape</span>
                  <div>
                    <h4 className="font-label-bold text-white font-bold">Utilization of Underused Land</h4>
                    <p className="text-body-md text-white/70">
                      Turn non-arable land or roof space into a productive, revenue-generating asset.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Process */}
            <div className="flex flex-col gap-lg">
              <h2 className="text-headline-lg font-display-lg mb-md font-bold text-white">
                Our Seamless Process
              </h2>
              <div className="flex flex-col gap-md">
                <div className="relative pl-lg border-l-2 border-primary/30 pb-4">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="font-label-bold text-white font-bold">1. Site Audit</h4>
                  <p className="text-body-md text-white/70">
                    Comprehensive technical feasibility study and soil analysis.
                  </p>
                </div>
                <div className="relative pl-lg border-l-2 border-primary/30 pb-4">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="font-label-bold text-white font-bold">2. Custom Engineering</h4>
                  <p class="text-body-md text-white/70">
                    Optimizing system layout for maximum yield and farm workflow.
                  </p>
                </div>
                <div className="relative pl-lg border-l-2 border-primary/30 pb-4">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="font-label-bold text-white font-bold">3. Rapid Installation</h4>
                  <p className="text-body-md text-white/70">
                    Minimal disruption to your crops, livestock, and daily operations.
                  </p>
                </div>
                <div className="relative pl-lg border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="font-label-bold text-white font-bold">4. Grid Activation & Support</h4>
                  <p className="text-body-md text-white/70">
                    Final testing, utility connection, and 24/7 performance monitoring.
                  </p>
                </div>
              </div>
              <div className="mt-md">
                <p className="text-caption text-white/50 italic">No obligation. Expert assessment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
