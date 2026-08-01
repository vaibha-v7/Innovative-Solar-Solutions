import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CommercialSolar() {
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
    <div className="bg-background text-on-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden py-12">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2SXHsk5lI6o47FQyOVwFTBSytYEA49WW1uHR0IGMz0IwSigFXIwX-JA0s6xFnoTEWTmqDTJiTJyMQzrwyeZV7wjMYfV4oC_OOjZDReFbrZrRGASSCStu06TjE_HGrn8arJIlOoHOHYuKfItsFx_NNxzPBnnnh1ciwJGUliL3Ug_9lptmQLU6PaWq_GxUs70BHkXRsAnS8dftwE8jAFhra0mOcTbuO-GtbUUonvp-nTGEZR-do7cg-")`,
              filter: "brightness(0.6)"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-margin-desktop w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="max-w-2xl text-left">
              <span className="inline-block px-3 py-1 bg-primary text-on-primary font-label-bold text-caption uppercase mb-6 tracking-widest rounded-sm">
                Solar Solutions
              </span>
              <h1 className="text-display-lg font-display-lg text-white mb-6 uppercase leading-none">
                Clean Energy <br />
                <span className="text-primary">For Your Business</span>
              </h1>
              <p className="text-body-lg font-body-lg text-white/80 mb-8 font-light">
                Save money and help the planet with our high-quality solar panels made for commercial buildings and facilities.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-white font-label-bold">
                  <span className="material-symbols-outlined text-primary">check_circle</span> 24/7 Monitoring
                </li>
                <li className="flex items-center gap-2 text-white font-label-bold">
                  <span className="material-symbols-outlined text-primary">check_circle</span> Government Support
                </li>
                <li className="flex items-center gap-2 text-white font-label-bold">
                  <span className="material-symbols-outlined text-primary">check_circle</span> Live Monitoring
                </li>
                <li className="flex items-center gap-2 text-white font-label-bold">
                  <span className="material-symbols-outlined text-primary">check_circle</span> Expert Maintenance
                </li>
                <li className="flex items-center gap-2 text-white font-label-bold">
                  <span className="material-symbols-outlined text-primary">check_circle</span> Max Energy Generation
                </li>
              </ul>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => navigate({ pathname: "/", hash: "#contact-section" })}
                  className="bg-primary text-on-primary px-lg py-base text-headline-md font-headline-md rounded hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-sm cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Quote Form */}
            
          </div>
        </div>
      </section>

      {/* ROI & Business Benefits */}
      <section className="py-xl bg-inverse-surface text-white text-left" id="commercial-benefits">
        <div className="max-w-7xl mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
            {/* Left Column: Advantages */}
            <div className="space-y-8">
              <h2 className="text-headline-lg font-display-lg uppercase mb-8 font-bold text-white">
                Advantages of Commercial Solar
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl mt-1">payments</span>
                  <div>
                    <h3 className="font-label-bold uppercase mb-1 font-bold text-white">Lower Electricity Bills</h3>
                    <p className="text-body-md text-white/80">Save a lot of money on your monthly power costs.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl mt-1">eco</span>
                  <div>
                    <h3 className="font-label-bold uppercase mb-1 font-bold text-white">Green Business</h3>
                    <p className="text-body-md text-white/80">Show your customers you care about the planet.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl mt-1">bolt</span>
                  <div>
                    <h3 className="font-label-bold uppercase mb-1 font-bold text-white">Energy Independence</h3>
                    <p className="text-body-md text-white/80">Stop worrying about rising power prices or blackouts.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl mt-1">roofing</span>
                  <div>
                    <h3 className="font-label-bold uppercase mb-1 font-bold text-white">Use Your Roof</h3>
                    <p className="text-body-md text-white/80">Turn empty roof space into a money-saving asset.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Process */}
            <div className="space-y-8">
              <h2 className="text-headline-lg font-display-lg uppercase mb-8 font-bold text-white">
                Our Simple Process
              </h2>
              <div className="space-y-6 relative">
                <div className="flex gap-4 items-stretch">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div className="w-0.5 h-full bg-white/20 min-h-[40px]"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="font-label-bold uppercase mb-1 font-bold text-white">1. Site Check</h3>
                    <p className="text-body-md text-white/80">We visit your building to see how much solar you can fit.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-stretch">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div className="w-0.5 h-full bg-white/20 min-h-[40px]"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="font-label-bold uppercase mb-1 font-bold text-white">2. Smart Design</h3>
                    <p className="text-body-md text-white/80">Our engineers create the best solar plan for your needs.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-stretch">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div className="w-0.5 h-full bg-white/20 min-h-[40px]"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="font-label-bold uppercase mb-1 font-bold text-white">3. Quick Setup</h3>
                    <p className="text-body-md text-white/80">We install the panels fast with zero mess or trouble.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-stretch">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  </div>
                  <div>
                    <h3 className="font-label-bold uppercase mb-1 font-bold text-white">4. Turn On</h3>
                    <p className="text-body-md text-white/80">We connect everything and start your savings immediately.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
