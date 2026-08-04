import { useState } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { createCustomer } from "../services/customer.service";
import { sendOwnerEmail } from "../services/email.service";

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const position = [26.85237054932443, 80.92761561021176];
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await createCustomer(formData);

    await sendOwnerEmail(formData);

    setFormSubmitted(true);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      pincode: "",
    });

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);

  } catch (error) {
    console.error(error);

    alert("Something went wrong.");
  }
};

  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-gradient z-10"></div>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
          ></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-margin-desktop w-full grid md:grid-cols-2 gap-lg items-center">
          <div className="space-y-md">
            <div className="inline-flex items-center bg-primary/20 border border-primary/30 px-3 py-1 text-primary-fixed-dim font-label-bold text-caption uppercase tracking-widest">
              Reliable Solar Power
            </div>
            <h1 className="text-display-lg font-display-lg text-white leading-none">
              The Future of <span className="text-primary">Solar Energy</span> starts here.
            </h1>
            <p className="text-body-lg font-body text-surface-container-highest leading-relaxed">
              We provide high-quality solar panel installation for your home or business. Save money and protect the environment with our simple, expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-md pt-sm">
              <button
                onClick={() => {
                  const element = document.getElementById("contact-section");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-primary text-on-primary px-lg py-md font-headline-md text-body-md rounded-DEFAULT hover:bg-primary-container active:scale-95 transition-all text-center"
              >
                Get Free
                <br />
                Consultation
              </button>
              <Link
                to="/calculator"
                className="bg-transparent border-2 border-white text-white px-lg py-md font-headline-md text-body-md rounded-DEFAULT hover:bg-white hover:text-inverse-surface active:scale-95 transition-all text-center flex items-center justify-center"
              >
                Savings Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Excellence Section */}
      <section className="py-xl bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="space-y-lg">
              <div className="space-y-md">
                <h6 className="text-primary font-label-bold text-label-bold tracking-widest uppercase">
                  Engineering Excellence
                </h6>
                <h2 className="text-display-lg font-display-lg text-inverse-surface leading-tight">
                  Premium Structural <span className="text-primary">Engineering</span>
                </h2>
                <p className="text-body-lg font-body-lg text-secondary">
                  We build the strongest foundations for your solar investment using world-class materials and technology.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-md">
                <div className="flex gap-md">
                  <div className="bg-primary/10 p-sm rounded-DEFAULT h-fit text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">architecture</span>
                  </div>
                  <div>
                    <h4 className="text-headline-md font-headline-md text-inverse-surface text-[20px]">
                      High-Strength ZAM Structure
                    </h4>
                    <p className="text-body-md font-body-md text-secondary">
                      2.5mm thick, 4x3 inch width, with a 25-year rust-free warranty.
                    </p>
                  </div>
                </div>

                <div className="flex gap-md">
                  <div className="bg-primary/10 p-sm rounded-DEFAULT h-fit text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">fitness_center</span>
                  </div>
                  <div>
                    <h4 className="text-headline-md font-headline-md text-inverse-surface text-[20px]">
                      Superior Strength
                    </h4>
                    <p className="text-body-md font-body-md text-secondary">
                      Prefabricated design with 4x more strength than standard HDGI structures.
                    </p>
                  </div>
                </div>

                <div className="flex gap-md">
                  <div className="bg-primary/10 p-sm rounded-DEFAULT h-fit text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">precision_manufacturing</span>
                  </div>
                  <div>
                    <h4 className="text-headline-md font-headline-md text-inverse-surface text-[20px]">
                      Exclusive German Tech
                    </h4>
                    <p className="text-body-md font-body-md text-secondary">
                      The only provider in UP using this advanced technology.
                    </p>
                  </div>
                </div>

                <div className="flex gap-md">
                  <div className="bg-primary/10 p-sm rounded-DEFAULT h-fit text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">air</span>
                  </div>
                  <div>
                    <h4 className="text-headline-md font-headline-md text-inverse-surface text-[20px]">
                      Wind Resilience
                    </h4>
                    <p className="text-body-md font-body-md text-secondary">
                      Tested to withstand winds up to 150km/hr.
                    </p>
                  </div>
                </div>

                <div className="flex gap-md">
                  <div className="bg-primary/10 p-sm rounded-DEFAULT h-fit text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">layers</span>
                  </div>
                  <div>
                    <h4 className="text-headline-md font-headline-md text-inverse-surface text-[20px]">
                      Advanced Grouting
                    </h4>
                    <p className="text-body-md font-body-md text-secondary">
                      Fosroc GP2 chemical for superior waterproofing and a rock-solid metal bond.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 blur-sm rounded-lg"></div>
              <div className="relative aspect-video overflow-hidden rounded-lg border border-outline-variant shadow-lg">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSOFIDSgykWL6EOCk9tPk7xrY2sym8l-CcfS5J-MF7VDfZSb1xRuCErmGpMAk5kZfHqqcFq4CRmZctzAQx08Ecf6N53YlS2YM08gD65ugTUoPvdnmQXGwCTNYiV0svHJQkAQ7qG54YGKDszQSw-kUE8hNy26plibw2-ELxyKrp9CPsZOwSZBSAH-cvGvNiXvCPlydAwHVwPK7UjMOVGmG8q-9V08bX6fEnGZ8lmrgSJfFbIuSTk1vn4lP1lcglu3VihLhhujC6ZYs"
                  alt="High-quality close-up of ZAM solar mounting structure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Bento Grid */}
      <section className="py-xl max-w-7xl mx-auto px-margin-desktop" id="offerings">
        <div className="flex flex-col md:flex-row justify-between items-end mb-lg gap-md">
          <div className="max-w-2xl">
            <h2 className="text-headline-lg font-headline-lg text-inverse-surface">
              Solar Power for Everyone
            </h2>
            <p className="text-body-lg font-body-lg text-secondary mt-xs">
              Simple and reliable solar solutions for homes, businesses, and farms.
            </p>
          </div>
        </div>
        <div className="grid h-auto grid-cols-1 gap-gutter md:h-[600px] md:grid-cols-3">
          {/* Residential Offering */}
          <div className="group bento-card relative overflow-hidden bg-white border border-outline-variant p-lg flex flex-col justify-end md:col-span-1">
            <div className="mb-auto relative z-10 text-primary">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                home
              </span>
            </div>

            <div className="relative z-10 mt-lg">
              <h3 className="text-headline-md font-headline-md text-inverse-surface mb-sm">
                Residential Solar
              </h3>
              <p className="text-body-md font-body-md text-secondary mb-md">
                Save money on your monthly bills and power your home with clean energy from the sun.
              </p>
              <Link
                to="/residential"
                className="block text-center w-full bg-primary hover:bg-primary-container text-white py-sm font-label-bold text-label-bold rounded-sm transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Commercial Offering */}
          <div className="group bento-card relative overflow-hidden bg-inverse-surface p-lg flex flex-col md:col-span-1">
            <div className="mb-auto text-primary">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                business
              </span>
            </div>
            <div className="relative z-10 mt-lg">
              <h3 className="text-headline-md font-headline-md text-white mb-sm">
                Commercial Solar
              </h3>
              <p className="text-body-md font-body-md text-surface-variant mb-md">
                Cut your business costs and help the planet with powerful solar systems built for companies.
              </p>
              <Link
                to="/commercial"
                className="block text-center w-full bg-primary hover:bg-primary-container text-white py-sm font-label-bold text-label-bold rounded-sm transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Agricultural Offering */}
          <div className="group bento-card relative overflow-hidden bg-surface-container-low border border-outline-variant p-lg flex flex-col md:col-span-1">
            <div className="mb-auto text-primary">
              <span className="material-symbols-outlined text-4xl">agriculture</span>
            </div>
            <div className="relative z-10 mt-lg">
              <h3 className="text-headline-md font-headline-md text-inverse-surface mb-sm">
                Agricultural Projects
              </h3>
              <p className="text-body-md font-body-md text-secondary mb-md">
                Keep your farm running with solar power for your water pumps, greenhouses, and livestock.
              </p>
              <Link
                to="/agricultural"
                className="block text-center w-full bg-primary hover:bg-primary-container text-white py-sm font-label-bold text-label-bold rounded-sm transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-inverse-surface py-xl overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-margin-desktop grid md:grid-cols-2 gap-xl items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-primary/30"></div>
            <div
              className="aspect-square bg-cover bg-right border-4 border-primary"
              style={{
                backgroundImage: `url("https://img.magnific.com/premium-photo/black-man-electrician-solar-panels-installation-rooftop-sustainable-energy-with-eco-friendly-technology-maintenance-tools-male-engineering-with-infrastructure-power-from-sun_590464-165444.jpg?semt=ais_hybrid&w=740&q=80")`,
              }}
            ></div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-md">
              <p className="text-white font-display-lg text-display-lg leading-none font-extrabold">10+</p>
              <p className="text-surface-container-highest text-caption font-label-bold mt-1 uppercase tracking-wider">
                YEARS OF ENGINEERING EXCELLENCE
              </p>
            </div>
          </div>
          <div className="space-y-md text-left">
            <h6 className="text-primary font-label-bold text-label-bold tracking-widest uppercase">
              The Team Behind the Power
            </h6>
            <h2 className="text-display-lg font-display-lg text-white leading-tight">
              Helping You Build a <span className="text-primary">Greener</span> Future.
            </h2>
            <p className="text-body-lg font-body-lg text-surface-variant">
              At Innovative Solar Solutions, we do more than just install panels. We build smart energy systems. Our team of experts is here to make clean energy easy and reliable for your home or business.
            </p>
            <div className="grid grid-cols-2 gap-md pt-md">
              <div>
                <h5 className="text-white font-headline-md text-body-md mb-xs font-bold">High Accuracy</h5>
                <p className="text-caption font-body-md text-secondary-fixed-dim">
                  We make sure your system produces as much power as possible.
                </p>
              </div>
              <div>
                <h5 className="text-white font-headline-md text-body-md mb-xs font-bold">Full Support</h5>
                <p className="text-caption font-body-md text-secondary-fixed-dim">
                  We handle everything from paperwork to watching over your system day and night.
                </p>
              </div>
            </div>
            <div className="pt-lg">
              <button
                onClick={() => {
                  const element = document.getElementById("contact-section");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-inverse-surface px-md py-sm font-label-bold text-label-bold uppercase hover:bg-primary hover:text-white transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Contact Form Section */}
      <section className="py-xl bg-surface" id="contact-section">
        <div className="max-w-7xl mx-auto px-margin-desktop grid md:grid-cols-2 gap-xl">
          {/* Left Column: Form */}
          <div className="space-y-lg text-left">
            <div className="space-y-md">
              <h2 className="text-display-lg font-display-lg text-inverse-surface leading-tight">
                Let's build your solar future.
              </h2>
              <div className="w-24 h-1.5 bg-primary"></div>
              <p className="text-body-lg font-body-lg text-secondary">
                Contact our experts today for a personalized site visit and custom quote.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-lg bg-green-50 border border-green-200 text-green-800 rounded-md">
                <h4 className="font-bold mb-1">Thank you!</h4>
                <p>Your request has been successfully submitted. Our solar engineer will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="space-y-xs">
                    <label className="text-label-bold font-label-bold text-inverse-surface uppercase tracking-wider block">
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-md border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary bg-white outline-none"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div className="space-y-xs">
                    <label className="text-label-bold font-label-bold text-inverse-surface uppercase tracking-wider block">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-md border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary bg-white outline-none"
                      placeholder="email@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="space-y-xs">
                    <label className="text-label-bold font-label-bold text-inverse-surface uppercase tracking-wider block">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-md border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary bg-white outline-none"
                      placeholder="+91"
                      type="tel"
                    />
                  </div>
                  <div className="space-y-xs">
                    <label className="text-label-bold font-label-bold text-inverse-surface uppercase tracking-wider block">
                      Pincode
                    </label>
                    <input
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      className="w-full p-md border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary bg-white outline-none"
                      placeholder="226001"
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      pattern="[0-9]{6}"
                      title="Please enter a valid 6-digit pincode"
                    />
                  </div>
                </div>
                <div className="space-y-xs">
                  <label className="text-label-bold font-label-bold text-inverse-surface uppercase tracking-wider block">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full p-md border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary bg-white outline-none"
                    placeholder="Street, city, state"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  className="bg-primary text-on-primary px-lg py-md font-label-bold text-label-bold uppercase tracking-widest flex items-center gap-sm hover:bg-primary-container active:scale-95 transition-all duration-150"
                  type="submit"
                >
                  Submit Request <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Info & Map */}
          <div className="space-y-lg text-left">
            <div className="bg-surface-container-low p-lg space-y-lg border border-outline-variant">
              <div className="flex items-start gap-md">
                <div className="bg-primary/10 p-sm text-primary rounded-DEFAULT flex items-center justify-center">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-label-bold font-label-bold text-inverse-surface uppercase">Call Us</p>
                  <p className="text-body-md font-body-md text-secondary">+91 70073 45031</p>
                </div>
              </div>
              
              <div className="flex items-start gap-md">
                <div className="bg-primary/10 p-sm text-primary rounded-DEFAULT flex items-center justify-center">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-label-bold font-label-bold text-inverse-surface uppercase">Email Us</p>
                  <p className="text-body-md font-body-md text-secondary">adityakaushal2@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-md">
                <div className="bg-primary/10 p-sm text-primary rounded-DEFAULT flex items-center justify-center">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-label-bold font-label-bold text-inverse-surface uppercase">Our OFFICE</p>
                  <p className="text-body-md font-body-md text-secondary">Lucknow 226001 Uttar Pradesh</p>
                </div>
              </div>
            </div>

            {/* Schematic Map illustration */}
            {/* <div className="relative aspect-video overflow-hidden border border-outline-variant">
              <div className="absolute inset-0 bg-surface-container-highest opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <span className="material-symbols-outlined text-primary text-4xl animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>
                    location_on
                  </span>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-primary/30 rounded-full blur-sm"></div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 p-2 border border-outline-variant shadow-sm rounded-sm">
                <p className="text-caption font-label-bold text-inverse-surface uppercase">Lucknow, UP</p>
              </div>
              <svg className="w-full h-full opacity-30" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)"></rect>
                <path d="M0 150 Q 200 100 400 200 T 800 150" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"></path>
                <path d="M100 0 Q 150 200 50 450" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"></path>
              </svg>
            </div> */}

<div className="relative z-0 w-full aspect-video rounded-xl overflow-hidden">

<div className="w-full aspect-video rounded-xl  overflow-hidden border border-outline-variant shadow-sm">
  <MapContainer
    center={position}
    zoom={13}
    scrollWheelZoom={false}
    className="w-full h-full"
  >
    <TileLayer
      attribution="© OpenStreetMap contributors"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <Marker position={position}>
      <Popup>Lucknow Office</Popup>
    </Marker>
  </MapContainer>
</div>

</div>

          </div>
        </div>
      </section>

      {/* Solar Shorts Video Section */}
      <section className="py-xl bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-margin-desktop">
          <div className="flex items-center gap-xs mb-lg justify-start">
            <span className="material-symbols-outlined text-primary font-bold text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              bolt
            </span>
            <h2 className="text-headline-lg font-headline-lg text-inverse-surface uppercase tracking-tight font-extrabold">
              Solar Shorts
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-md">
            {/* Maintenance Card */}
            <div className="relative aspect-[3/4] overflow-hidden group cursor-pointer" onClick={() =>
              window.open(
                "https://youtube.com/shorts/d158enOisE4?si=J8oxnYd_D_58mf4-",
                "_blank"
              )
            }>
              <img
                alt="Maintenance"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://media.istockphoto.com/id/2218657775/photo/close-up-of-worker-cleaning-photovoltaic-panel-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=ssOhJbMdRDu_gGPAKD18rm5t4vxoRbc2B3VaFnr6KYM="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="bg-primary rounded-full p-2 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-primary-container font-label-bold text-caption uppercase mb-1">Maintenance</p>
                <h3 className="text-white font-bold text-body-md leading-tight">
                  How to clean your panels like a pro
                </h3>
              </div>
            </div>

            {/* Products Card */}
            <div className="relative aspect-[3/4] overflow-hidden group cursor-pointer" onClick={() =>
              window.open(
                "https://youtu.be/rn6hJnJxb-4?si=n9Sm5FWFt4-Nbq5-",
                "_blank"
              )
            }>
              <img
                alt="Products"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1661997608910-da43d46039a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29sYXIlMjBwYW5lbCUyMGJhdHRlcnl8ZW58MHx8MHx8fDA%3D"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="bg-primary rounded-full p-2 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-primary-container font-label-bold text-caption uppercase mb-1">Products</p>
                <h3 className="text-white font-bold text-body-md leading-tight">
                  The best battery for your system
                </h3>
              </div>
            </div>

            {/* Tutorial Card */}
            <div className="relative aspect-[3/4] overflow-hidden group cursor-pointer" onClick={() =>
              window.open(
                "https://youtu.be/uORFle0uty4?si=PB8YCsfPLHCW6CjN",
                "_blank"
              )
            }>
              <img
                alt="Tutorial"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://media.istockphoto.com/id/1320775518/photo/solar-reverse.webp?a=1&b=1&s=612x612&w=0&k=20&c=tInS_lZukGgKmg_0lBvK5HRmQi_l0XjGs7T5D9_SRh8="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="bg-primary rounded-full p-2 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-primary-container font-label-bold text-caption uppercase mb-1">Tutorial</p>
                <h3 className="text-white font-bold text-body-md leading-tight">
                  Reading your solar inverter
                </h3>
              </div>
            </div>

            {/* Efficiency Card */}
<div className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
  onClick={() =>
    window.open(
      "https://youtu.be/nnNtXh4U7vA?si=OA56iJjbBYQZLoDq",
      "_blank"
    )
  }
>
  <img
    alt="Efficiency"
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxojtQ9I-2VVJD9NOLGu0a-_TLrJFJcOceGEfWgN392FUVYjTmdx62DZkqQzv7VI1D_UvtPnAXtSOfUwaG0caW_Hsl-4OBYW9xQ27pu39JZ6SiwY5knpF5MxsKAhYTpel6CB5lgdfcGsl9sxvtFo1q08q2DOkTFTijLQo1ViqlVEEgWKMVdZ9qzuV3RovfoBmMaSZis-b4h3673tjyQxU-VwiT-Duo6gIEyfWs_Y7TQAsZIX2sIcAn"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

  <div className="absolute top-4 right-4">
    <div className="bg-primary rounded-full p-2 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
      <span
        className="material-symbols-outlined text-white text-[20px]"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        play_arrow
      </span>
    </div>
  </div>

  <div className="absolute bottom-4 left-4 right-4 text-left">
    <p className="text-primary-container font-label-bold text-caption uppercase mb-1">
      Efficiency
    </p>
    <h3 className="text-white font-bold text-body-md leading-tight">
      Why tracking panels work better
    </h3>
  </div>
</div>

            {/* Weather Card */}
            <div className="relative aspect-[3/4] overflow-hidden group cursor-pointer" onClick={() =>
              window.open(
                "https://youtube.com/shorts/OPQ9gfK5vU8?si=xDZGSPiQ1tth3zW8",
                "_blank"
              )
            }>
              <img
                alt="Weather"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1724041875463-ba0a3f2fc68c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMG9uJTIwc29sYXIlMjBwYW5uZWx8ZW58MHx8MHx8fDA%3D"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="bg-primary rounded-full p-2 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-primary-container font-label-bold text-caption uppercase mb-1">Weather</p>
                <h3 className="text-white font-bold text-body-md leading-tight">
                  Does solar work in the rain?
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}