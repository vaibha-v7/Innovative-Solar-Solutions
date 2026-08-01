import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function OffGridSystems() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [booked, setBooked] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: "", email: "", date: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookSession = (e) => {
    e.preventDefault();
    if (bookingForm.name && bookingForm.email && bookingForm.date) {
      setBooked(true);
      setTimeout(() => {
        setBooked(false);
        setModalOpen(false);
        setBookingForm({ name: "", email: "", date: "" });
      }, 4000);
    }
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center bg-inverse-surface overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-60"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuASq4kbNNfUq-sJkJtXgtEzXp7Cx5KbErWGk0Ujn8nblwCrWdHRSHsfTXa-g_K-qXyiTtZuTL3_WTn5-zoTPY48V7hUWxgZ3pyMooeLa21NZ7QLDGD3eCA9XJixImE1s2c_lzWv0Y46tnaxp4EAAZ-cki5hkZibYEVi4bjbq-EkvvSGu9HI-LpjZV-FPKJAp9vITyj0ZEBgCQUWwR9SpaFKpdMqYeRJWNdcd50KzLNItWXaQ0_8REmkNQzA33v0-JSKduyjbuEmWJU")`,
            }}
          ></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl w-full text-left">
          <div className="max-w-2xl bg-white/90 backdrop-blur-sm p-lg border-l-[6px] border-primary shadow-lg rounded-r-md">
            <h1 className="text-display-lg font-display-lg text-on-surface mb-md">
              Off-grid Solar Systems
            </h1>
            <p className="text-body-lg font-body-lg text-secondary mb-lg">
              Be your own power company. Best for remote areas where the grid doesn't reach. Total energy freedom starts here.
            </p>
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section className="py-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-lg gap-md text-left">
            <div>
              <span className="text-primary font-label-bold uppercase tracking-widest block">
                The Technology
              </span>
              <h2 className="text-headline-lg font-headline-lg mt-base font-bold">What is it?</h2>
            </div>
            <div className="h-[2px] flex-grow bg-outline-variant mb-xs ml-md hidden md:block"></div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-left">
            {/* Energy Independence */}
            <div className="p-lg bg-white border border-outline-variant hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group rounded-md">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container/10 mb-md group-hover:bg-primary transition-colors text-primary group-hover:text-white rounded-DEFAULT">
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
              <h3 className="text-headline-md font-headline-md mb-sm font-bold">No More Power Bills</h3>
              <p className="text-body-md text-secondary leading-relaxed">
                Stop paying for electricity. You make your own power and never get a bill again.
              </p>
            </div>

            {/* Battery Backup */}
            <div className="p-lg bg-white border border-outline-variant hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group rounded-md">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container/10 mb-md group-hover:bg-primary transition-colors text-primary group-hover:text-white rounded-DEFAULT">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  battery_charging_full
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md mb-sm font-bold">Power All Night</h3>
              <p className="text-body-md text-secondary leading-relaxed">
                The sun charges your batteries during the day so your lights stay on all night long.
              </p>
            </div>

            {/* Go Anywhere */}
            <div className="p-lg bg-white border border-outline-variant hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group rounded-md">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container/10 mb-md group-hover:bg-primary transition-colors text-primary group-hover:text-white rounded-DEFAULT">
                <span className="material-symbols-outlined">explore</span>
              </div>
              <h3 className="text-headline-md font-headline-md mb-sm font-bold">Works Everywhere</h3>
              <p className="text-body-md text-secondary leading-relaxed">
                Whether you live in the mountains or the plains, our solar systems work in any location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Detail Block */}
      <section className="py-xl bg-surface-container-low text-left">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-xl items-center">
          <div className="relative">
            <div
              className="aspect-square bg-cover bg-center border-outline-variant border rounded-md"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvDtdh0U0IpvvZjDgAiblTTxivQlWLL5ia2gkFFt4cc3h5QnNZnpmDA2ZHBV2JMvOWzLb5eBeP0WzfynEGeiNEyGo6laVDnjLwiM-GFzCbUxPQmKvB1AklCltgxcs7YxYwnK8rWlMS9O9A_SuyiD-cLCcMSZ30GTl1DuRMt4jwu9y-UxnkKrFmB_TcwFrDtrIyUxQk0clHs2WHhY9WsKPwuHFDy6-WVeJiMv253uglZ0xXwUslhab8")`,
              }}
            ></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary p-md flex flex-col justify-end text-on-primary hidden md:flex rounded-sm shadow-lg">
              <span className="text-headline-lg font-headline-lg font-bold">100%</span>
              <span className="text-caption font-caption uppercase tracking-widest">Self-Sustaining</span>
            </div>
          </div>
          <div className="space-y-md mt-12 md:mt-0">
            <h2 className="text-headline-lg font-headline-lg font-bold">Engineered for Extremes</h2>
            <p className="text-body-md text-secondary">
              Our off-grid systems are designed to handle peak loads and survive harsh environments. We use premium lithium-ion technology and industrial-grade inverters to ensure your reliability is never in question.
            </p>
            <ul className="space-y-sm">
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-label-bold text-on-surface">Weatherproof Enclosures</span>
              </li>
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-label-bold text-on-surface">Remote Monitoring</span>
              </li>
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-label-bold text-on-surface">After Installation Services</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Consultation Bar */}
      <section className="bg-inverse-surface py-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row items-center justify-between gap-lg text-left">
            <div className="space-y-xs">
              <h2 className="text-headline-lg font-headline-lg text-white font-bold">Ready for the switch?</h2>
              <p className="text-body-md text-surface-variant">
                Our engineering team provides a full site assessment within 48 hours.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/#contact-section")}
              className="bg-primary hover:bg-primary-container text-on-primary font-label-bold px-lg py-sm rounded uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
            >
              Consult an Engineer
            </button>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-lg relative shadow-2xl animate-in zoom-in-95 duration-200 text-left border border-outline-variant">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-secondary hover:text-primary"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="text-headline-md font-bold mb-md uppercase text-inverse-surface">
              Schedule Site Audit
            </h3>
            {booked ? (
              <div className="p-md bg-green-50 text-green-800 rounded border border-green-200 text-center">
                <span className="material-symbols-outlined text-4xl text-green-600 mb-2">check_circle</span>
                <p className="font-bold">Consultation Booked!</p>
                <p className="text-sm mt-1">An confirmation email was sent. An engineer will reach out on your selected date.</p>
              </div>
            ) : (
              <form onSubmit={handleBookSession} className="space-y-base">
                <div className="space-y-xs">
                  <label className="text-caption font-bold text-on-surface-variant uppercase block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-base border border-outline-variant rounded focus:border-primary outline-none bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-xs">
                  <label className="text-caption font-bold text-on-surface-variant uppercase block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-base border border-outline-variant rounded focus:border-primary outline-none bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-xs">
                  <label className="text-caption font-bold text-on-surface-variant uppercase block">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={bookingForm.date}
                    onChange={handleInputChange}
                    required
                    className="w-full p-base border border-outline-variant rounded focus:border-primary outline-none bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-container text-white py-md rounded font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Book Assessment
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
