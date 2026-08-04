import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function HybridSystems() {
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
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-surface py-12">
        <div className="absolute inset-0 z-0">
          <img
            alt="Modern luxury home with solar panels"
            className="w-full h-full object-cover"
            src="https://sunapecopower.com/wp-content/uploads/2026/03/What-Makes-a-Hybrid-System.png?wsr"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        <div className="max-w-7xl mx-auto px-margin-desktop w-full relative z-10 py-xl text-left">
          <div className="max-w-2xl bg-surface-container-low/90 backdrop-blur-sm p-lg md:p-xl border-l-4 border-primary shadow-lg rounded-r-md">
            <span className="text-primary font-label-bold text-caption uppercase tracking-widest inline-block mb-2">
              Hybrid Systems
            </span>
            <h1 className="text-display-lg font-display-lg text-on-surface mb-md">
              Hybrid Solar Systems
            </h1>
            <p className="text-body-lg font-body-lg text-secondary">
              The best of both worlds. Stay connected to the grid while ensuring your home stays powered during outages with advanced battery backup.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Hybrid? Section */}
      <section className="py-xl bg-surface text-left">
        <div className="max-w-7xl mx-auto px-margin-desktop">
          <div className="text-center mb-xl">
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-base font-bold">
              Why Choose Hybrid?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Smart Switching */}
            <div className="p-lg bg-surface-container-lowest border border-surface-variant hover:border-primary hover:-translate-y-1 transition-all rounded-md shadow-sm">
              <div className="w-12 h-12 bg-secondary-container text-primary flex items-center justify-center rounded mb-md">
                <span className="material-symbols-outlined text-[32px]">settings_input_component</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-sm font-bold">Smart Switching</h3>
              <p className="text-body-md font-body-md text-secondary">
                Your system automatically chooses the best power source—solar, battery, or grid—to save you the most money.
              </p>
            </div>

            {/* Power During Outages */}
            <div className="p-lg bg-surface-container-lowest border border-surface-variant hover:border-primary hover:-translate-y-1 transition-all rounded-md shadow-sm">
              <div className="w-12 h-12 bg-secondary-container text-primary flex items-center justify-center rounded mb-md">
                <span className="material-symbols-outlined text-[32px]">electric_bolt</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-sm font-bold">Power During Outages</h3>
              <p className="text-body-md font-body-md text-secondary">
                When the power goes out, your home stays bright. The battery kicks in instantly to keep your lights and fridge running.
              </p>
            </div>

            {/* Maximum Savings */}
            <div className="p-lg bg-surface-container-lowest border border-surface-variant hover:border-primary hover:-translate-y-1 transition-all rounded-md shadow-sm">
              <div className="w-12 h-12 bg-secondary-container text-primary flex items-center justify-center rounded mb-md">
                <span className="material-symbols-outlined text-[32px]">savings</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-sm font-bold">Maximum Savings</h3>
              <p className="text-body-md font-body-md text-secondary">
                Use your stored battery power in the evening when electricity is most expensive to lower your monthly bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Strip */}
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
              className="bg-primary text-on-primary font-label-bold px-lg py-sm rounded uppercase tracking-widest hover:bg-primary-container active:scale-95 transition-all whitespace-nowrap cursor-pointer"
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
