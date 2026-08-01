import { useState } from "react";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "What does the site assessment include?",
    answer:
      "We review your roof or land, estimate generation potential, check structural and electrical requirements, and map the best system size for your needs.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most residential and small commercial installs complete in a few days once approvals and materials are ready. Larger systems are scheduled in phases.",
  },
  {
    question: "Do you support on-grid, off-grid, and hybrid systems?",
    answer:
      "Yes. We design systems for grid-tied savings, battery-backed resilience, or fully independent setups depending on your location and goals.",
  },
];

export default function ServicesFAQ() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-background text-on-background min-h-screen">
      <section className="relative overflow-hidden bg-surface py-xl">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,_rgba(187,0,19,0.22),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(187,0,19,0.16),_transparent_35%)]" />
        <div className="max-w-7xl mx-auto px-margin-desktop relative z-10 grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div className="space-y-md">
            <span className="inline-flex items-center gap-xs bg-primary text-on-primary px-sm py-xs rounded-sm font-label-bold text-label-bold uppercase tracking-widest">
              Engineered Excellence
            </span>
            <h1 className="text-display-lg font-display-lg text-on-surface leading-none">
              Precision Solar <span className="text-primary">Services</span>
            </h1>
            <p className="text-body-lg font-body-lg text-secondary">
              From consultation to commissioning, we handle the full solar journey for homes, businesses, and farms.
            </p>
          </div>
          <div className="bg-inverse-surface text-white p-lg rounded-xl shadow-xl border border-outline-variant">
            <div className="grid grid-cols-2 gap-md">
              {[
                ["Site Survey", "roofing"],
                ["Design & Approval", "design_services"],
                ["Installation", "construction"],
                ["Maintenance", "support_agent"],
              ].map(([label, icon]) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-lg p-md">
                  <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
                  <p className="mt-sm font-headline-md text-headline-md">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-margin-desktop">
          <div className="mb-lg text-center md:text-left">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Core Solar Architectures</h2>
            <div className="w-24 h-1 bg-primary mb-md" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* On-Grid System */}
            <div className="group bg-surface p-lg border border-outline-variant hover:border-primary transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="mb-md text-primary">
                  <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>grid_view</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">On-grid Systems</h3>
                <p className="font-body-md text-body-md text-secondary mb-md">
                  Connected to your local power company. You can send extra power back to them and save money on your bills. Best for homes in towns and cities.
                </p>
                <ul className="space-y-sm mb-lg">
                  <li className="flex items-center gap-xs font-caption text-caption uppercase text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span> No battery needed
                  </li>
                  <li className="flex items-center gap-xs font-caption text-caption uppercase text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span> Lowest cost to start
                  </li>
                  <li className="flex items-center gap-xs font-caption text-caption uppercase text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span> Very reliable
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => navigate("/on-grid")}
                className="w-full py-sm border-2 border-on-surface text-on-surface font-label-bold text-label-bold uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-colors cursor-pointer"
              >
                Technical Specs
              </button>
            </div>

            {/* Off-Grid System */}
            <div className="group bg-surface p-lg border border-outline-variant hover:border-primary transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="mb-md text-primary">
                  <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>cloud_off</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Off-grid Systems</h3>
                <p className="font-body-md text-body-md text-secondary mb-md">
                  Works all by itself without the power company. Uses large batteries to keep your lights on at night or when it's cloudy. Best for remote areas.
                </p>
                <ul className="space-y-sm mb-lg">
                  <li className="flex items-center gap-xs font-caption text-caption uppercase text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span> Be your own power company
                  </li>
                  <li className="flex items-center gap-xs font-caption text-caption uppercase text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span> Includes backup batteries
                  </li>
                  <li className="flex items-center gap-xs font-caption text-caption uppercase text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span> Works anywhere
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => navigate("/off-grid")}
                className="w-full py-sm border-2 border-on-surface text-on-surface font-label-bold text-label-bold uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-colors cursor-pointer"
              >
                Technical Specs
              </button>
            </div>

            {/* Hybrid System */}
            <div className="group bg-secondary text-on-secondary p-lg border border-secondary hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-4 -right-4 bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-bold text-caption px-md py-xs rotate-45 z-10">
                <br />
              </div>
              <div>
                <div className="mb-md text-tertiary-fixed">
                  <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 1', transform: "translateY(0px)" }}>electric_bolt</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-sm">Hybrid Systems</h3>
                <p className="font-body-md text-body-md text-secondary-fixed mb-md">
                  The best of both worlds. It connects to the power company AND has its own batteries. It automatically picks the best power source to make sure you never run out of electricity.
                </p>
                <ul className="space-y-sm mb-lg">
                  <li className="flex items-center gap-xs font-caption text-caption uppercase text-secondary-fixed">
                    <span className="material-symbols-outlined text-tertiary-fixed text-base">check_circle</span> Smart power switching
                  </li>
                  <li className="flex items-center gap-xs font-caption text-caption uppercase text-secondary-fixed">
                    <span className="material-symbols-outlined text-tertiary-fixed text-base">check_circle</span> Works during power cuts
                  </li>
                  <li className="flex items-center gap-xs font-caption text-caption uppercase text-secondary-fixed">
                    <span className="material-symbols-outlined text-tertiary-fixed text-base">check_circle</span> Saves the most money
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => navigate("/hybrid")}
                className="w-full py-sm bg-primary text-on-primary font-label-bold text-label-bold uppercase tracking-widest border border-primary hover:bg-on-primary hover:text-primary transition-colors cursor-pointer"
              >
                Technical Specs
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="py-xl bg-surface">
            <div className="max-w-4xl mx-auto px-margin-desktop">
                <div className="mb-lg text-center">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Frequently Asked Questions</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-md" />
                </div>
                
                <div className="space-y-base">
                    {/* FAQ Item 1 */}
                    <details className="group bg-surface border border-outline-variant rounded-lg overflow-hidden transition-all duration-300">
                        <summary className="flex items-center justify-between p-md cursor-pointer list-none font-headline-md text-body-lg text-on-surface hover:bg-surface-container-low transition-colors">
                            <span>How much can I save with rooftop solar?</span>
                            <span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300">add</span>
                        </summary>
                        <div className="p-md pt-0 text-body-md text-secondary border-t border-outline-variant/50 mt-xs">
                            Savings depend on your electricity consumption, rooftop space, and system size. Most residential customers significantly reduce their monthly electricity bills, while larger systems can offset a major portion of yearly consumption.
                        </div>
                    </details>

                    {/* FAQ Item 2 */}
                    <details className="group bg-surface border border-outline-variant rounded-lg overflow-hidden transition-all duration-300">
                        <summary className="flex items-center justify-between p-md cursor-pointer list-none font-headline-md text-body-lg text-on-surface hover:bg-surface-container-low transition-colors">
                            <span>Is Innovative Solar Solutions eligible under PM Surya Ghar Yojana?</span>
                            <span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300">add</span>
                        </summary>
                        <div className="p-md pt-0 text-body-md text-secondary border-t border-outline-variant/50 mt-xs">
                            Yes. Innovative Solar Solutions assists eligible homeowners with PM Surya Ghar subsidy guidance, documentation support, net metering coordination, and DISCOM-related processes.
                        </div>
                    </details>

                    {/* FAQ Item 3 */}
                    <details className="group bg-surface border border-outline-variant rounded-lg overflow-hidden transition-all duration-300">
                        <summary className="flex items-center justify-between p-md cursor-pointer list-none font-headline-md text-body-lg text-on-surface hover:bg-surface-container-low transition-colors">
                            <span>How long does a rooftop solar system last?</span>
                            <span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300">add</span>
                        </summary>
                        <div className="p-md pt-0 text-body-md text-secondary border-t border-outline-variant/50 mt-xs">
                            Solar panels are designed for long-term performance, typically lasting 30 years or more. Innovative Solar Solutions systems are engineered with durable structures, intelligent monitoring, and long-term service support for reliable operation over decades.
                        </div>
                    </details>

                    {/* FAQ Item 4 */}
                    <details className="group bg-surface border border-outline-variant rounded-lg overflow-hidden transition-all duration-300">
                        <summary className="flex items-center justify-between p-md cursor-pointer list-none font-headline-md text-body-lg text-on-surface hover:bg-surface-container-low transition-colors">
                            <span>What makes Innovative Solar Solutions different from other solar companies?</span>
                            <span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300">add</span>
                        </summary>
                        <div className="p-md pt-0 text-body-md text-secondary border-t border-outline-variant/50 mt-xs">
                            Innovative Solar Solutions focuses on engineering, accountability, and long-term reliability not just installation. Our systems include generation commitments, intelligent monitoring, proactive servicing, waterproofing-conscious installation methods, and infrastructure-grade structures.
                        </div>
                    </details>

                    {/* FAQ*/}
                    <details className="group bg-surface border border-outline-variant rounded-lg overflow-hidden transition-all duration-300">
                        <summary className="flex items-center justify-between p-md cursor-pointer list-none font-headline-md text-body-lg text-on-surface hover:bg-surface-container-low transition-colors">
                            <span>Will solar installation damage my terrace waterproofing?</span>
                            <span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300">add</span>
                        </summary>
                        <div className="p-md pt-0 text-body-md text-secondary border-t border-outline-variant/50 mt-xs">
                            Innovative Solar Solutions follows a specialized waterproofing-safe installation approach designed to help maintain terrace sealing integrity and minimize seepage risks caused due to installation.
                        </div>
                    </details>

                    {/* FAQ Item 6 */}
                    <details className="group bg-surface border border-outline-variant rounded-lg overflow-hidden transition-all duration-300">
                        <summary className="flex items-center justify-between p-md cursor-pointer list-none font-headline-md text-body-lg text-on-surface hover:bg-surface-container-low transition-colors">
                            <span>What happens if my system underperforms?</span>
                            <span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300">add</span>
                        </summary>
                        <div className="p-md pt-0 text-body-md text-secondary border-t border-outline-variant/50 mt-xs">
                            Every Innovative Solar Solutions installation includes intelligent monitoring systems that continuously track performance and identify faults or deviations. Eligible systems are also covered under our generation commitment framework as per agreed terms.
                        </div>
                    </details>

                    {/* FAQ Item 7*/}
                    <details className="group bg-surface border border-outline-variant rounded-lg overflow-hidden transition-all duration-300">
                        <summary className="flex items-center justify-between p-md cursor-pointer list-none font-headline-md text-body-lg text-on-surface hover:bg-surface-container-low transition-colors">
                            <span>Do I get mobile monitoring access?</span>
                            <span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300">add</span>
                        </summary>
                        <div className="p-md pt-0 text-body-md text-secondary border-t border-outline-variant/50 mt-xs">
                            Yes. Customers receive access to real-time generation monitoring, historical performance data, and system status tracking through smart monitoring platforms.
                        </div>
                    </details>
                </div>
            </div>
        </section>


    </div>
  );
}