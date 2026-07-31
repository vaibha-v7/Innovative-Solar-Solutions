import { useState } from "react";

export default function OnGridSystems() {
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
      <section className="relative w-full min-h-[600px] flex items-center overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGX9ytCoOcuI4rdOWewhA_BkWXRPRy9F7DfjegcAi8eRErrw4Lu-5xVBshBgbp-i-LdE5Im-aNUyJKBR4x01rq9q8lF4A5DNv4ObLvGdzD7-HMzIDoa28Mwib4e0xWZe4k4O8jL_eD3JmmX6uu-LAeIj7XKQjPJgqlS7VtbX9p59zF4HDGv9Av1IFAhmf7Zepey_vnRkBM7756xp0pMGpAqIsKp4SDzcq4JfriMn3WUhu2Y1M973FvgZLRMd6JsOkhaABGoTSpY5I")`,
            }}
          ></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-margin-desktop w-full py-xl text-left">
          <div className="bg-surface-container/90 backdrop-blur-sm p-lg md:p-xl max-w-2xl border-l-4 border-primary rounded-r-md">
            <h1 className="font-display-lg text-display-lg text-on-surface mb-md">
              On-grid Solar Systems
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg leading-relaxed font-medium">
              Connected to your local power company. Save money and help the planet with our highly efficient solar infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section (Bento Style) */}
      <section className="py-xl max-w-7xl mx-auto px-margin-desktop text-left">
        <div className="mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">How it Works</h2>
          <div className="w-24 h-1 bg-primary mt-xs"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest border border-outline-variant p-md flex flex-col group hover:border-primary hover:shadow-lg transition-all duration-300 rounded-md">
            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-high mb-md text-primary rounded-DEFAULT">
              <span className="material-symbols-outlined text-primary scale-125">battery_0_bar</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-sm font-bold">No Battery Needed</h3>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              Save money by using the power grid. No need to buy expensive battery storage banks.
            </p>
            <div className="mt-auto pt-md opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-primary font-label-bold text-label-bold flex items-center gap-xs font-bold text-sm">
                EFFICIENCY <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-lowest border border-outline-variant p-md flex flex-col group hover:border-primary hover:shadow-lg transition-all duration-300 rounded-md">
            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-high mb-md text-primary rounded-DEFAULT">
              <span className="material-symbols-outlined text-primary scale-125">payments</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-sm font-bold">Sell Extra Power</h3>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              Make money from your solar panels. Send extra energy to the grid via net metering and earn credits.
            </p>
            <div className="mt-auto pt-md opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-primary font-label-bold text-label-bold flex items-center gap-xs font-bold text-sm">
                SAVE MONEY <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-lowest border border-outline-variant p-md flex flex-col group hover:border-primary hover:shadow-lg transition-all duration-300 rounded-md">
            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-high mb-md text-primary rounded-DEFAULT">
              <span className="material-symbols-outlined text-primary scale-125">bolt</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-sm font-bold">Reliable Energy</h3>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              Your power stays on day and night. The local grid seamlessly keeps your home running when the sun is down.
            </p>
            <div className="mt-auto pt-md opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-primary font-label-bold text-label-bold flex items-center gap-xs font-bold text-sm">
                ALWAYS ON <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Informational Strip */}
      <section className="bg-inverse-surface py-lg mb-xl">
        <div className="max-w-7xl mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-lg text-left">
          <div className="text-center md:text-left">
            <h4 className="font-headline-md text-headline-md text-white font-bold">Ready for the switch?</h4>
            <p className="font-body-md text-body-md text-surface-variant opacity-80 mt-1">
              Our engineering team provides a full site assessment within 48 hours.
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-primary text-on-primary font-label-bold text-label-bold px-lg py-md uppercase tracking-widest hover:bg-primary-container active:scale-95 duration-150 rounded transition-all whitespace-nowrap cursor-pointer"
          >
            Consult an Engineer
          </button>
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
