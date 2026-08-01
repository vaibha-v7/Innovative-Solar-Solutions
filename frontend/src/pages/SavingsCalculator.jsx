import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SOLAR_CONFIG = {
  costPerKw: 65000,
  performanceRatio: 0.78,
  roofAreaSqFtPerKw: 60,
  electricityTariffPerUnit: 7.0,
  co2KgPerKwh: 0.716,
  lifetimeYears: 25,
  annualDegradationRate: 0.008,
  annualInflationRate: 0.03,
  treeCo2AbsorbKgPerYr: 20,
  kmPerKgCo2: 8.33,

  subsidySlabs: [
    { upToKw: 2, ratePerKw: 30000 },
    { upToKw: 3, ratePerKw: 18000 },
    { maxSubsidy: 78000, aboveKw: 3 },
  ],
};

function getSunHoursForState(stateName = "") {
  const s = stateName.toLowerCase();
  if (s.includes("rajasthan") || s.includes("gujarat") || s.includes("madhya pradesh")) {
    return 5.2;
  }
  if (s.includes("himachal") || s.includes("kashmir") || s.includes("ladakh") || s.includes("assam") || s.includes("sikkim") || s.includes("meghalaya")) {
    return 4.2;
  }
  return 4.8;
}

function cleanLocalityName(name = "") {
  return name
    .replace(/\s+(B\.O|S\.O|H\.O|G\.P\.O\.|Sub Post Office|Branch Post Office|Head Post Office)$/i, "")
    .trim();
}

function getOfflinePincodeInfo(pin) {
  const p = pin.trim();
  if (p.length < 3) return null;

  if (p === "226003") return { locality: "Aliganj", district: "Lucknow", state: "Uttar Pradesh" };
  if (p === "226001") return { locality: "Hazratganj", district: "Lucknow", state: "Uttar Pradesh" };
  if (p === "226010") return { locality: "Gomti Nagar", district: "Lucknow", state: "Uttar Pradesh" };
  if (p === "226016") return { locality: "Indira Nagar", district: "Lucknow", state: "Uttar Pradesh" };
  if (p === "201301") return { locality: "Sector 15", district: "Noida", state: "Uttar Pradesh" };
  if (p === "208001") return { locality: "Civil Lines", district: "Kanpur", state: "Uttar Pradesh" };
  if (p === "110001") return { locality: "Connaught Place", district: "New Delhi", state: "Delhi" };
  if (p === "400050") return { locality: "Bandra West", district: "Mumbai", state: "Maharashtra" };
  if (p === "560034") return { locality: "Koramangala", district: "Bengaluru", state: "Karnataka" };

  const prefix3 = p.substring(0, 3);
  const prefix2 = p.substring(0, 2);

  if (prefix3 === "226") return { locality: "", district: "Lucknow", state: "Uttar Pradesh" };
  if (prefix3 === "201") return { locality: "", district: "Gautam Buddha Nagar", state: "Uttar Pradesh" };
  if (prefix3 === "208") return { locality: "", district: "Kanpur", state: "Uttar Pradesh" };
  if (prefix3 === "221") return { locality: "", district: "Varanasi", state: "Uttar Pradesh" };
  if (prefix3 === "282") return { locality: "", district: "Agra", state: "Uttar Pradesh" };
  if (prefix3 === "248") return { locality: "", district: "Dehradun", state: "Uttarakhand" };
  if (prefix3 === "110") return { locality: "", district: "New Delhi", state: "Delhi" };
  if (prefix3 === "122") return { locality: "", district: "Gurugram", state: "Haryana" };
  if (prefix3 === "121") return { locality: "", district: "Faridabad", state: "Haryana" };
  if (prefix3 === "302") return { locality: "", district: "Jaipur", state: "Rajasthan" };
  if (prefix3 === "380") return { locality: "", district: "Ahmedabad", state: "Gujarat" };
  if (prefix3 === "400") return { locality: "", district: "Mumbai", state: "Maharashtra" };
  if (prefix3 === "411") return { locality: "", district: "Pune", state: "Maharashtra" };
  if (prefix3 === "560") return { locality: "", district: "Bengaluru", state: "Karnataka" };
  if (prefix3 === "600") return { locality: "", district: "Chennai", state: "Tamil Nadu" };
  if (prefix3 === "500") return { locality: "", district: "Hyderabad", state: "Telangana" };
  if (prefix3 === "700") return { locality: "", district: "Kolkata", state: "West Bengal" };
  if (prefix3 === "800") return { locality: "", district: "Patna", state: "Bihar" };

  if (prefix2 >= "11" && prefix2 <= "13") return { locality: "", district: "NCR / Haryana", state: "Haryana" };
  if (prefix2 >= "14" && prefix2 <= "15") return { locality: "", district: "Punjab Region", state: "Punjab" };
  if (prefix2 === "16") return { locality: "", district: "Chandigarh Region", state: "Chandigarh" };
  if (prefix2 === "17") return { locality: "", district: "Himachal Region", state: "Himachal Pradesh" };
  if (prefix2 >= "18" && prefix2 <= "19") return { locality: "", district: "J&K Region", state: "Jammu and Kashmir" };
  if (prefix2 >= "20" && prefix2 <= "28") return { locality: "", district: "UP Region", state: "Uttar Pradesh" };
  if (prefix2 >= "30" && prefix2 <= "34") return { locality: "", district: "Rajasthan Region", state: "Rajasthan" };
  if (prefix2 >= "36" && prefix2 <= "39") return { locality: "", district: "Gujarat Region", state: "Gujarat" };
  if (prefix2 >= "40" && prefix2 <= "44") return { locality: "", district: "Maharashtra Region", state: "Maharashtra" };
  if (prefix2 >= "45" && prefix2 <= "48") return { locality: "", district: "MP Region", state: "Madhya Pradesh" };
  if (prefix2 === "49") return { locality: "", district: "Chhattisgarh Region", state: "Chhattisgarh" };
  if (prefix2 >= "50" && prefix2 <= "53") return { locality: "", district: "Andhra / Telangana", state: "Telangana" };
  if (prefix2 >= "56" && prefix2 <= "59") return { locality: "", district: "Karnataka Region", state: "Karnataka" };
  if (prefix2 >= "60" && prefix2 <= "64") return { locality: "", district: "Tamil Nadu Region", state: "Tamil Nadu" };
  if (prefix2 >= "67" && prefix2 <= "69") return { locality: "", district: "Kerala Region", state: "Kerala" };
  if (prefix2 >= "70" && prefix2 <= "74") return { locality: "", district: "West Bengal Region", state: "West Bengal" };
  if (prefix2 >= "75" && prefix2 <= "77") return { locality: "", district: "Odisha Region", state: "Odisha" };
  if (prefix2 >= "78" && prefix2 <= "79") return { locality: "", district: "North East Region", state: "Assam" };
  if (prefix2 >= "80" && prefix2 <= "85") return { locality: "", district: "Bihar / Jharkhand", state: "Bihar" };

  return { locality: "", district: "India", state: "India" };
}

function calcSubsidy(systemSizeKw) {
  const { subsidySlabs } = SOLAR_CONFIG;
  if (systemSizeKw <= 0) return 0;
  if (systemSizeKw > subsidySlabs[2].aboveKw) return subsidySlabs[2].maxSubsidy;

  if (systemSizeKw > subsidySlabs[0].upToKw) {
    const baseSlab = subsidySlabs[0].upToKw * subsidySlabs[0].ratePerKw;
    const extraKw = systemSizeKw - subsidySlabs[0].upToKw;
    const extraSlab = extraKw * subsidySlabs[1].ratePerKw;
    return baseSlab + extraSlab;
  }

  return systemSizeKw * subsidySlabs[0].ratePerKw;
}

function calcLifetimeSavings(firstYearSavings) {
  const { lifetimeYears, annualDegradationRate, annualInflationRate } = SOLAR_CONFIG;
  let total = 0;
  let currentYearSavings = firstYearSavings;

  for (let year = 0; year < lifetimeYears; year++) {
    total += currentYearSavings;
    currentYearSavings = currentYearSavings * (1 - annualDegradationRate) * (1 + annualInflationRate);
  }
  return Math.round(total);
}

const DEFAULTS = {
  pincode: "226003",
  monthlyBill: 2100,
};

export default function SavingsCalculator() {
  const [pincode, setPincode] = useState(DEFAULTS.pincode);
  const [monthlyBill, setMonthlyBill] = useState(DEFAULTS.monthlyBill);
  const [locationDetails, setLocationDetails] = useState({ locality: "Aliganj", district: "Lucknow", state: "Uttar Pradesh", isLive: false, loading: false });
  const [availableLocalities, setAvailableLocalities] = useState(["Aliganj"]);
  const [selectedLocality, setSelectedLocality] = useState("Aliganj");
  const [showResults, setShowResults] = useState(false);
  const [validationError, setValidationError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const cleanPin = pincode.trim();
    if (cleanPin.length !== 6) {
      const fallback = getOfflinePincodeInfo(cleanPin);
      if (fallback) {
        const primaryLoc = fallback.locality || "";
        setLocationDetails({ locality: primaryLoc, district: fallback.district, state: fallback.state, isLive: false, loading: false });
        setAvailableLocalities(primaryLoc ? [primaryLoc] : []);
        setSelectedLocality(primaryLoc);
      } else {
        setLocationDetails({ locality: "", district: "", state: "", isLive: false, loading: false });
        setAvailableLocalities([]);
        setSelectedLocality("");
      }
      return;
    }

    const offlineData = getOfflinePincodeInfo(cleanPin);
    const offlineLoc = offlineData?.locality || "";
    setLocationDetails({
      locality: offlineLoc,
      district: offlineData?.district || "India",
      state: offlineData?.state || "India",
      isLive: false,
      loading: true,
    });
    setAvailableLocalities(offlineLoc ? [offlineLoc] : []);
    setSelectedLocality(offlineLoc);

    const controller = new AbortController();
    const fetchLivePincode = async () => {
      try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${cleanPin}`, {
          signal: controller.signal,
        });
        const data = await response.json();
        if (data && data[0] && data[0].Status === "Success" && data[0].PostOffice && data[0].PostOffice.length > 0) {
          const postOffices = data[0].PostOffice;
          const firstPo = postOffices[0];

          const rawNames = postOffices.map(po => cleanLocalityName(po.Name)).filter(Boolean);
          const uniqueLocs = Array.from(new Set(rawNames));

          const primaryLocality = uniqueLocs[0] || offlineLoc || "";

          setLocationDetails({
            locality: primaryLocality,
            district: firstPo.District || offlineData?.district || "",
            state: firstPo.State || offlineData?.state || "",
            isLive: true,
            loading: false,
          });
          setAvailableLocalities(uniqueLocs);
          setSelectedLocality(primaryLocality);
        } else {
          setLocationDetails(prev => ({ ...prev, loading: false }));
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setLocationDetails(prev => ({ ...prev, loading: false }));
        }
      }
    };

    fetchLivePincode();
    return () => controller.abort();
  }, [pincode]);

  const handlePincodeChange = (e) => {
    const val = e.target.value.replace(/\D/g, "");
    setPincode(val);
    if (val.length === 6) {
      setValidationError("");
    }
  };

  const results = useMemo(() => {
    const {
      costPerKw,
      performanceRatio,
      roofAreaSqFtPerKw,
      electricityTariffPerUnit,
      co2KgPerKwh,
      treeCo2AbsorbKgPerYr,
      kmPerKgCo2,
    } = SOLAR_CONFIG;

    const peakSunHours = getSunHoursForState(locationDetails.state);
    const bill = Math.max(500, monthlyBill || 500);

    const dailyKwhNeeded = (bill / electricityTariffPerUnit) / 30;
    const dailyGenerationPerKw = peakSunHours * performanceRatio;
    const rawSystemSize = dailyKwhNeeded / dailyGenerationPerKw;

    const systemSize = Math.max(1, Math.round(rawSystemSize * 10) / 10);
    const roofAreaSqFt = Math.round(systemSize * roofAreaSqFtPerKw);
    const monthlyGenerationKwh = Math.round(systemSize * dailyGenerationPerKw * 30);
    const annualGenerationKwh = monthlyGenerationKwh * 12;

    const monthlySavings = Math.min(bill, Math.round(monthlyGenerationKwh * electricityTariffPerUnit));
    const yearlySavings = monthlySavings * 12;
    const lifetimeSavings = calcLifetimeSavings(yearlySavings);

    const totalPlantCost = Math.round(systemSize * costPerKw);
    const govtSubsidy = calcSubsidy(systemSize);
    const netInvestment = Math.max(0, totalPlantCost - govtSubsidy);

    const paybackYears = yearlySavings > 0
      ? +(netInvestment / yearlySavings).toFixed(1)
      : 0;

    const annualCo2Kg = Math.round(annualGenerationKwh * co2KgPerKwh);
    const treesPlanted = Math.round(annualCo2Kg / treeCo2AbsorbKgPerYr);
    const kmDistanceSaved = Math.round(annualCo2Kg * kmPerKgCo2);

    return {
      systemSize,
      roofAreaSqFt,
      monthlySavings,
      yearlySavings,
      lifetimeSavings,
      paybackYears,
      totalPlantCost,
      govtSubsidy,
      netInvestment,
      annualCo2Kg,
      treesPlanted,
      kmDistanceSaved,
    };
  }, [monthlyBill, locationDetails.state]);

  const handleReset = () => {
    setPincode(DEFAULTS.pincode);
    setMonthlyBill(DEFAULTS.monthlyBill);
    setShowResults(false);
    setValidationError("");
  };

  const handleCalculate = () => {
    if (pincode.trim().length !== 6) {
      setValidationError("Please enter a valid 6-digit Pin code");
      setShowResults(false);
      return;
    }
    if (!monthlyBill || monthlyBill < 500) {
      setValidationError("Please select your monthly electricity bill");
      setShowResults(false);
      return;
    }
    setValidationError("");
    setShowResults(true);
  };

  return (
    <div className="bg-background text-on-background min-h-screen">
      <section className="relative overflow-hidden bg-surface py-lg sm:py-xl">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(187,0,19,0.12),transparent_35%),radial-gradient(circle_at_top_right,rgba(187,0,19,0.18),transparent_30%)]" />
        <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10 space-y-md sm:space-y-lg">

          <div className="text-center max-w-3xl mx-auto space-y-xs">
            <span className="inline-flex items-center gap-xs bg-primary text-on-primary px-sm py-xs rounded-sm font-label-bold text-label-bold uppercase tracking-widest">
              Solar ROI Calculator
            </span>
            <h1 className="text-3xl sm:text-display-lg font-display-lg text-on-surface leading-tight">
              Calculate Your Solar <span className="text-primary">Savings</span>
            </h1>
            <p className="text-body-md sm:text-body-lg font-body-lg text-secondary">
              Enter your Pin Code & Monthly Bill below to calculate required system size, roof space, and payback period.
            </p>
          </div>

          <div className="bg-inverse-surface text-white rounded-xl p-md sm:p-lg shadow-xl border border-outline-variant space-y-md text-left">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-md items-end pb-md border-b border-white/10">
              <div className="md:col-span-4">
                <div className="flex justify-between items-center mb-xs">
                  <label htmlFor="pincode-input" className="block text-caption font-label-bold uppercase tracking-widest text-surface-variant">
                    Pin code
                  </label>
                  {(selectedLocality || locationDetails.district) && (
                    <span className="text-[11px] font-label-bold text-white bg-primary/20 border border-primary/40 px-xs py-0.5 rounded flex items-center gap-xs">
                      📍 {selectedLocality || locationDetails.locality ? `${selectedLocality || locationDetails.locality}, ` : ""}{locationDetails.district}
                    </span>
                  )}
                </div>

                <input
                  id="pincode-input"
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={handlePincodeChange}
                  placeholder="e.g. 226003"
                  className="w-full px-md py-sm rounded-lg bg-white/10 border border-white/20 text-white font-headline-md placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors text-base sm:text-lg"
                />

                {availableLocalities.length > 1 && (
                  <div className="mt-xs flex items-center justify-between gap-xs text-[11px] text-surface-variant">
                    <span>Select Area:</span>
                    <select
                      value={selectedLocality}
                      onChange={(e) => setSelectedLocality(e.target.value)}
                      className="bg-white/10 border border-white/20 text-white rounded px-xs py-0.5 text-[11px] font-bold outline-none cursor-pointer hover:border-primary max-w-[180px] truncate"
                    >
                      {availableLocalities.map((loc) => (
                        <option key={loc} value={loc} className="bg-inverse-surface text-white">
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div className="md:col-span-5">
                <div className="flex justify-between items-center mb-xs">
                  <label htmlFor="monthly-bill-slider" className="text-caption font-label-bold uppercase tracking-widest text-surface-variant flex items-center gap-xs">
                    Average monthly bill
                    <span className="material-symbols-outlined text-[16px] text-surface-variant" title="Your average monthly electricity spending">info</span>
                  </label>
                  <span className="text-white font-headline-md bg-primary/20 border border-primary/30 px-sm py-0.5 rounded text-primary font-bold text-sm sm:text-base">
                    ₹{monthlyBill.toLocaleString("en-IN")}
                  </span>
                </div>

                <input
                  id="monthly-bill-slider"
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={monthlyBill}
                  onChange={(event) => setMonthlyBill(Number(event.target.value))}
                  className="w-full cursor-pointer"
                  style={{ accentColor: "#bb0013" }}
                />

                <div className="flex justify-between items-center text-caption mt-xs text-surface-variant">
                  <span>Min ₹500</span>
                  <span>Max ₹50,000</span>
                </div>
              </div>

              <div className="md:col-span-3">
                <button
                  type="button"
                  onClick={handleCalculate}
                  className="w-full bg-primary text-on-primary py-sm px-md rounded-lg font-label-bold uppercase tracking-widest hover:bg-primary-container active:scale-95 transition-all cursor-pointer shadow-md flex items-center justify-center gap-xs text-sm sm:text-base"
                >
                  <span className="material-symbols-outlined text-[20px]">calculate</span>
                  Calculate
                </button>
              </div>
            </div>

            {validationError && (
              <div className="p-xs px-md bg-red-500/20 border border-red-500/40 text-red-200 text-caption rounded-md flex items-center gap-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">error</span>
                {validationError}
              </div>
            )}

            {showResults ? (
              <div className="space-y-md animate-in fade-in duration-300">
                <div className="bg-white/5 rounded-xl p-md border border-white/10 space-y-xs">
                  <h3 className="text-caption font-label-bold uppercase tracking-widest text-surface-variant">
                    Required System Size & Space
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-md pt-xs">
                    <div className="flex items-center gap-md bg-white/5 p-md rounded-lg border border-white/10">
                      <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        grid_view
                      </span>
                      <div>
                        <p className="text-caption uppercase tracking-widest text-surface-variant">System Size</p>
                        <p className="text-2xl font-bold text-white">{results.systemSize} kW</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-md bg-white/5 p-md rounded-lg border border-white/10">
                      <span className="material-symbols-outlined text-primary text-3xl">
                        roofing
                      </span>
                      <div>
                        <p className="text-caption uppercase tracking-widest text-surface-variant">Roof Area</p>
                        <p className="text-2xl font-bold text-white">{results.roofAreaSqFt} sq. ft.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-xs">
                  <h3 className="text-caption font-label-bold uppercase tracking-widest text-surface-variant">
                    Estimated Financial Returns
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-sm sm:gap-md">
                    <div className="bg-white/5 rounded-lg p-sm sm:p-md border border-white/10 min-w-0 overflow-hidden">
                      <p className="text-caption uppercase tracking-widest text-surface-variant truncate">Monthly Savings</p>
                      <p className="text-lg sm:text-xl font-bold text-white truncate">₹{results.monthlySavings.toLocaleString("en-IN")}</p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-sm sm:p-md border border-white/10 min-w-0 overflow-hidden">
                      <p className="text-caption uppercase tracking-widest text-surface-variant truncate">Yearly Savings</p>
                      <p className="text-lg sm:text-xl font-bold text-white truncate">₹{results.yearlySavings.toLocaleString("en-IN")}</p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-sm sm:p-md border border-white/10 min-w-0 overflow-hidden">
                      <p className="text-caption uppercase tracking-widest text-surface-variant truncate">25-Yr Savings</p>
                      <p className="text-lg sm:text-xl font-bold text-white truncate">₹{results.lifetimeSavings.toLocaleString("en-IN")}</p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-sm sm:p-md border border-white/10 min-w-0 overflow-hidden">
                      <p className="text-caption uppercase tracking-widest text-surface-variant truncate">Payback Period</p>
                      <p className="text-lg sm:text-xl font-bold text-white whitespace-nowrap">{results.paybackYears} yrs</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-xs pt-xs">
                  <h3 className="text-caption font-label-bold uppercase tracking-widest text-surface-variant">
                    Your Solar Saves More Than Money
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm sm:gap-md bg-white/5 rounded-xl p-md border border-white/10">
                    <div className="flex flex-col items-center text-center p-xs min-w-0">
                      <span className="material-symbols-outlined text-primary text-2xl mb-xs">public</span>
                      <p className="text-caption uppercase tracking-widest text-surface-variant truncate">CO₂ Mitigated</p>
                      <p className="text-base sm:text-lg font-bold text-white mt-xs whitespace-nowrap">{results.annualCo2Kg.toLocaleString("en-IN")} Kg/yr</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-xs sm:border-l border-t sm:border-t-0 border-white/10 pt-sm sm:pt-xs min-w-0">
                      <span className="material-symbols-outlined text-primary text-2xl mb-xs">park</span>
                      <p className="text-caption uppercase tracking-widest text-surface-variant truncate">Trees Planted</p>
                      <p className="text-base sm:text-lg font-bold text-white mt-xs whitespace-nowrap">{results.treesPlanted} Trees</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-xs sm:border-l border-t sm:border-t-0 border-white/10 pt-sm sm:pt-xs min-w-0">
                      <span className="material-symbols-outlined text-primary text-2xl mb-xs">directions_car</span>
                      <p className="text-caption uppercase tracking-widest text-surface-variant truncate">Car Distance Saved</p>
                      <p className="text-base sm:text-lg font-bold text-white mt-xs whitespace-nowrap">{results.kmDistanceSaved.toLocaleString("en-IN")} Kms</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-sm text-caption text-surface-variant leading-relaxed">
                  <p className="font-bold text-white/80 mb-xs">Disclaimer & Assumptions:</p>
                  <ul className="list-disc list-inside space-y-xs opacity-80 text-[12px]">
                    <li>Savings include 0.8% annual degradation & 3% power tariff inflation over 25 years.</li>
                    <li>Estimated capacity assumes average solar irradiance for {locationDetails.state || "India"}. Actual generation depends on roof orientation and discom rules.</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-md pt-xs">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-md py-sm rounded-lg font-label-bold text-label-bold uppercase tracking-widest border border-white/20 text-white/70 hover:border-white/50 hover:text-white transition-colors cursor-pointer text-xs sm:text-sm"
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/#contact-section")}
                    className="flex-1 bg-primary text-on-primary px-lg py-sm font-label-bold text-label-bold uppercase tracking-widest hover:bg-primary-container active:scale-95 transition-all rounded-lg text-center cursor-pointer shadow-md text-xs sm:text-sm"
                  >
                    Get Free Quote
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-xl p-md sm:p-lg text-center flex flex-col sm:flex-row items-center gap-md">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 text-primary flex-shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">analytics</span>
                </div>
                <div className="text-center sm:text-left space-y-xs flex-1">
                  <h4 className="text-base sm:text-lg font-bold text-white">Ready to Calculate Your Solar ROI?</h4>
                  <p className="text-caption sm:text-body-md text-surface-variant opacity-80">
                    Verify your 6-digit Pin Code & Monthly Bill above, then click <strong className="text-white">Calculate</strong> to view capacity, roof space & savings.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      <section className="py-xl bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-margin-desktop grid grid-cols-1 lg:grid-cols-3 gap-gutter text-left">
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