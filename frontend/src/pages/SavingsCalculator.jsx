import { useMemo, useState } from "react";

export default function SavingsCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(7500);
  const [systemSize, setSystemSize] = useState(5);

  const results = useMemo(() => {
    const monthlySavings = Math.round(monthlyBill * 0.82);
    const yearlySavings = monthlySavings * 12;
    const paybackYears = Math.max(3, Math.round((systemSize * 110000) / Math.max(yearlySavings, 1)));

    return { monthlySavings, yearlySavings, paybackYears };
  }, [monthlyBill, systemSize]);

  return (
    <div className="bg-background text-on-background min-h-screen">
      <section className="relative overflow-hidden bg-surface py-xl">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(187,0,19,0.12),transparent_35%),radial-gradient(circle_at_top_right,rgba(187,0,19,0.18),transparent_30%)]" />
        <div className="max-w-7xl mx-auto px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="space-y-md">
            <span className="inline-flex items-center gap-xs bg-primary text-on-primary px-sm py-xs rounded-sm font-label-bold text-label-bold uppercase tracking-widest">
              Solar ROI Tool
            </span>
            <h1 className="text-display-lg font-display-lg text-on-surface leading-none">
              Calculate Your Solar <span className="text-primary">Savings</span>
            </h1>
            <p className="text-body-lg font-body-lg text-secondary">
              Use this quick estimator to understand bill reduction, yearly savings, and a rough payback window before you request a site assessment.
            </p>
          </div>
          <div className="bg-inverse-surface text-white rounded-xl p-lg shadow-xl border border-outline-variant space-y-md">
            <div>
              <label className="text-caption font-label-bold uppercase tracking-widest text-surface-variant">Average monthly bill</label>
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={monthlyBill}
                onChange={(event) => setMonthlyBill(Number(event.target.value))}
                className="w-full mt-sm"
              />
              <div className="flex justify-between text-body-md mt-xs text-surface-variant">
                <span>₹1,000</span>
                <span className="text-white font-headline-md">₹{monthlyBill.toLocaleString("en-IN")}</span>
                <span>₹50,000</span>
              </div>
            </div>

            <div>
              <label className="text-caption font-label-bold uppercase tracking-widest text-surface-variant">System size</label>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={systemSize}
                onChange={(event) => setSystemSize(Number(event.target.value))}
                className="w-full mt-sm"
              />
              <div className="flex justify-between text-body-md mt-xs text-surface-variant">
                <span>1 kW</span>
                <span className="text-white font-headline-md">{systemSize} kW</span>
                <span>20 kW</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-md pt-sm">
              <div className="bg-white/5 rounded-lg p-md border border-white/10">
                <p className="text-caption uppercase tracking-widest text-surface-variant">Monthly savings</p>
                <p className="text-headline-md font-headline-md">₹{results.monthlySavings.toLocaleString("en-IN")}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-md border border-white/10">
                <p className="text-caption uppercase tracking-widest text-surface-variant">Yearly savings</p>
                <p className="text-headline-md font-headline-md">₹{results.yearlySavings.toLocaleString("en-IN")}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-md border border-white/10">
                <p className="text-caption uppercase tracking-widest text-surface-variant">Payback</p>
                <p className="text-headline-md font-headline-md">{results.paybackYears} years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl bg-white">
        <div className="max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-3 gap-gutter text-left">
          {[
            ["Bill offset", "payments", "See how much of your electricity bill solar can cover each month."],
            ["Carbon impact", "eco", "Estimate the amount of clean energy you move onto your roof or land."],
            ["System guidance", "tune", "Use the estimate to decide whether on-grid, off-grid, or hybrid fits best."],
          ].map(([title, icon, description]) => (
            <div key={title} className="p-lg bg-surface-container-low border border-outline-variant rounded-xl shadow-sm">
              <span className="material-symbols-outlined text-primary text-4xl">{icon}</span>
              <h2 className="mt-md text-headline-md font-headline-md text-inverse-surface">{title}</h2>
              <p className="mt-sm text-body-md text-secondary">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}