import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResidentialSolar() {
  const navigate = useNavigate();
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
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-inverse-surface py-12">
        <div className="absolute inset-0 z-0 opacity-60">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGKApWrINWKifMAgVsOCxMwqASrUoMXtX-Vllj2EOBuy-n_1E19AkP3b6LwU0Kqtdwf0vDvcND3esM3EOiR6-bOUAq0zIDL6HF7G5BrgOmpDy9_fQ8mgc3w6un2TFFpuo45aKJrP_ig7DBrzaB3GKmwlgax-1wl9TqzFoJvbNeSN2DGSPjDpqZ-rywqPlv0A0s4YgiwU5ft63-RQW43biugC6n8dWIgyowAqPMq1Le4dYqRo3r7fBb")`,
            }}
          ></div>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-inverse-surface via-inverse-surface/40 to-transparent"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-margin-desktop w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-center">
            <div className="md:col-span-7 text-left">
              <span className="inline-block px-sm py-xs bg-primary text-on-primary text-label-bold font-label-bold rounded-sm mb-base uppercase tracking-widest">
                Premium Residential Energy
              </span>
              <h1 className="text-display-lg font-display-lg text-on-primary mb-lg leading-none">
                Powering Your Future.
              </h1>
              <ul className="space-y-md mb-lg">
                <li className="flex items-center gap-sm text-on-primary font-body-lg">
                  <span className="material-symbols-outlined text-primary">check_circle</span> 24x7 monitoring
                </li>
                <li className="flex items-center gap-sm text-on-primary font-body-lg">
                  <span className="material-symbols-outlined text-primary">check_circle</span> After-installation services
                </li>
                <li className="flex items-center gap-sm text-on-primary font-body-lg">
                  <span className="material-symbols-outlined text-primary">check_circle</span> Maximum energy generation
                </li>
                <li className="flex items-center gap-sm text-on-primary font-body-lg">
                  <span className="material-symbols-outlined text-primary">check_circle</span> Expert maintenance
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-gutter">
                <button type="button"
                  onClick={() => navigate("/#contact-section")}
                  className="bg-primary text-on-primary px-lg py-base text-headline-md font-headline-md rounded hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-sm cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Free Quote Card */}
            
          </div>
        </div>
      </section>

      {/* Benefits & Process Section */}
      <section className="bg-inverse-surface py-xl full-width text-white text-left" id="benefits-grid">
        <div className="max-w-7xl mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
            {/* Left Column: Advantages */}
            <div className="space-y-lg">
              <h2 className="text-display-lg font-display-lg text-white mb-lg">
                Why Get Solar for Your Home
              </h2>
              <div className="space-y-md">
                <div className="flex gap-base items-start">
                  <span className="material-symbols-outlined text-primary text-3xl mt-1">payments</span>
                  <div>
                    <h4 className="text-label-bold font-label-bold text-on-primary uppercase tracking-wider font-bold">
                      Save on Power Bills
                    </h4>
                    <p className="text-body-md text-on-primary opacity-80 mt-1">
                      Pay much less for electricity every month and save money for years.
                    </p>
                  </div>
                </div>

                <div className="flex gap-base items-start">
                  <span className="material-symbols-outlined text-primary text-3xl mt-1">eco</span>
                  <div>
                    <h4 className="text-label-bold font-label-bold text-on-primary uppercase tracking-wider font-bold">
                      Good for the Earth
                    </h4>
                    <p className="text-body-md text-on-primary opacity-80 mt-1">
                      Help the planet by using clean energy from the sun at your house.
                    </p>
                  </div>
                </div>

                <div className="flex gap-base items-start">
                  <span className="material-symbols-outlined text-primary text-3xl mt-1">bolt</span>
                  <div>
                    <h4 className="text-label-bold font-label-bold text-on-primary uppercase tracking-wider font-bold">
                      No More Blackouts
                    </h4>
                    <p className="text-body-md text-on-primary opacity-80 mt-1">
                      Keep your lights on even when the main power grid goes down.
                    </p>
                  </div>
                </div>

                <div className="flex gap-base items-start">
                  <span className="material-symbols-outlined text-primary text-3xl mt-1">home</span>
                  <div>
                    <h4 className="text-label-bold font-label-bold text-on-primary uppercase tracking-wider font-bold">
                      Higher Home Value
                    </h4>
                    <p className="text-body-md text-on-primary opacity-80 mt-1">
                      Solar panels make your house worth more money if you ever decide to sell.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Process */}
            <div className="space-y-lg">
              <h2 className="text-display-lg font-display-lg text-white mb-lg">
                Our Seamless Process
              </h2>
              <div className="space-y-md relative">
                <div className="flex gap-base items-stretch">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0"></div>
                    <div className="w-px h-full bg-primary/30 min-h-[40px]"></div>
                  </div>
                  <div className="pb-md">
                    <h4 className="text-label-bold font-label-bold text-on-primary uppercase tracking-wider font-bold">
                      1. Quick Call
                    </h4>
                    <p className="text-body-md text-on-primary opacity-80 mt-1">
                      We talk about your home and energy needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-base items-stretch">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0"></div>
                    <div className="w-px h-full bg-primary/30 min-h-[40px]"></div>
                  </div>
                  <div className="pb-md">
                    <h4 className="text-label-bold font-label-bold text-on-primary uppercase tracking-wider font-bold">
                      2. Custom Plan
                    </h4>
                    <p className="text-body-md text-on-primary opacity-80 mt-1">
                      We design the perfect solar system for your roof.
                    </p>
                  </div>
                </div>

                <div className="flex gap-base items-stretch">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0"></div>
                    <div className="w-px h-full bg-primary/30 min-h-[40px]"></div>
                  </div>
                  <div className="pb-md">
                    <h4 className="text-label-bold font-label-bold text-on-primary uppercase tracking-wider font-bold">
                      3. Fast Install
                    </h4>
                    <p className="text-body-md text-on-primary opacity-80 mt-1">
                      Our team sets up your panels in just one day.
                    </p>
                  </div>
                </div>

                <div className="flex gap-base items-stretch">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0"></div>
                  </div>
                  <div>
                    <h4 className="text-label-bold font-label-bold text-on-primary uppercase tracking-wider font-bold">
                      4. Power On
                    </h4>
                    <p className="text-body-md text-on-primary opacity-80 mt-1">
                      Start saving money with clean energy immediately.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-caption text-on-primary opacity-60 mt-lg italic">
                No obligation. Expert assessment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
