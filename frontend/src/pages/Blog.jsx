import { useMemo, useState } from "react";

const articles = [
  {
    title: "Choosing the right solar system for your property",
    category: "Buying Guide",
    summary: "A quick overview of when to choose residential, commercial, or hybrid solar setups.",
    date: "July 12, 2025",
    readTime: "5 min read",
    content:
      "When evaluating a solar system for your property, the most important decision is matching system type to your load profile and grid connectivity. Residential systems (1–10 kW) are sized for household consumption and typically qualify for net metering. Commercial systems (10–500 kW) are designed for businesses with higher daytime demand. Hybrid systems add battery storage so excess energy generated during the day is available at night or during outages—ideal for properties with unreliable grid supply. Before choosing, audit your average monthly consumption, peak demand hours, and whether grid export is permitted by your DISCOM. A site visit from a certified installer will give you the most accurate sizing recommendation.",
  },
  {
    title: "How net metering turns excess energy into savings",
    category: "Energy Savings",
    summary: "Understand how grid-connected systems can reduce your bill after the panels are installed.",
    date: "June 28, 2025",
    readTime: "4 min read",
    content:
      "Net metering is a billing arrangement that credits solar system owners for the electricity they add to the grid. When your panels produce more electricity than you consume, the surplus flows back to the grid and your utility meter runs backwards—or you receive credits on your bill. In India, most state DISCOMs offer net metering for systems up to 500 kW under MNRE guidelines. The key benefit is that you effectively use the grid as a battery: export during the day, import at night, paying only the net difference. Over a year, customers with well-sized systems often see their annual electricity bill drop by 80–90%.",
  },
  {
    title: "Maintenance habits that keep solar systems efficient",
    category: "Care Tips",
    summary: "Simple checks that help panels stay productive through dust, weather, and seasonal changes.",
    date: "June 15, 2025",
    readTime: "6 min read",
    content:
      "Solar panels require very little maintenance but are not maintenance-free. The biggest enemy of panel efficiency is dust accumulation, which can reduce output by 15–25% in dry, dusty regions. A simple clean with a soft cloth and water every 2–4 weeks during summer is usually sufficient. Check your inverter display weekly—most modern inverters show daily generation, which should stay within 10% of your baseline on sunny days. Inspect mounting structures annually for loose bolts or corrosion. A professional AMC from your installer typically covers two site visits per year.",
  },
  {
    title: "On-grid vs off-grid vs hybrid: which suits you best?",
    category: "Buying Guide",
    summary: "A side-by-side breakdown of the three system types to help you make the right call.",
    date: "May 30, 2025",
    readTime: "7 min read",
    content:
      "On-grid systems are the most cost-effective choice for properties with reliable grid supply—no battery, lower cost and maintenance. Off-grid systems are essential where grid connectivity is absent or unreliable. Hybrid systems combine grid-tied operation with battery backup, giving you the savings of net metering plus resilience against power cuts. The right choice depends on your local grid reliability, electricity tariff structure, available space, and budget. For most urban customers in India, on-grid is the value leader; hybrid is rapidly gaining ground as battery prices fall.",
  },
  {
    title: "Understanding your electricity bill before going solar",
    category: "Energy Savings",
    summary: "Learn which charges on your bill are offset by solar and which ones remain.",
    date: "May 18, 2025",
    readTime: "5 min read",
    content:
      "Your electricity bill has multiple components: energy charges, fixed/demand charges, fuel adjustment charges, and taxes. Solar directly offsets energy charges by reducing the units you import from the grid. Fixed charges and meter rental fees remain even if you generate all your own power. Understanding your tariff slab is critical—customers in higher slabs (above ₹5/unit) see the fastest payback from solar. If you are above ₹6/unit, solar is almost certainly economically compelling for you.",
  },
  {
    title: "Monsoon season solar care: what to watch out for",
    category: "Care Tips",
    summary: "Practical advice for keeping your system safe and productive during heavy rains.",
    date: "May 5, 2025",
    readTime: "4 min read",
    content:
      "Monsoon brings heavy rain, strong winds, and humidity—all of which affect solar installations. On the positive side, rain naturally cleans panels. However, inspect all cable entry points before the season to prevent water ingress into inverters; check that mounting structure fasteners are tight; ensure earthing and lightning arrestors are intact; and verify your inverter is installed above flood-prone levels. After a storm, visually inspect panels for micro-cracks or debris damage and report any abnormal drops in generation to your installer promptly.",
  },
  {
    title: "Government subsidies for solar in India: 2025 update",
    category: "Buying Guide",
    summary: "A plain-language guide to the PM Surya Ghar subsidy and state-level incentives.",
    date: "April 22, 2025",
    readTime: "8 min read",
    content:
      "The PM Surya Ghar Muft Bijli Yojana (2024) provides central subsidies for residential rooftop solar. Systems up to 2 kW attract ₹30,000/kW; systems from 2–3 kW get ₹18,000/kW on additional capacity; systems above 3 kW receive a flat ₹78,000 subsidy. Several states like Uttar Pradesh, Gujarat, and Maharashtra offer supplementary state subsidies. To avail of subsidies, installation must be done by an MNRE-empanelled vendor with net metering. Applications are processed through solarrooftop.gov.in with typical processing times of 30–60 days.",
  },
  {
    title: "How to read your inverter display and catch problems early",
    category: "Care Tips",
    summary: "A quick guide to the metrics on your inverter screen and what each number means.",
    date: "April 8, 2025",
    readTime: "5 min read",
    content:
      "Modern string inverters display key parameters: Today's Generation (kWh)—compare to your daily baseline; Grid Voltage—should stay between 220–240V; AC Output Power—should match expected peak on clear days around noon; and Fault Codes—any error should be investigated immediately. Most inverters also have a smartphone app that logs data and sends alerts. A healthy 5 kW system in north India should generate 18–22 kWh on a clear summer day. If consistently below this, contact your installer.",
  },
  {
    title: "Solar financing options: loan, lease, or own outright?",
    category: "Energy Savings",
    summary: "Compare the financial models available for solar adoption so you can pick the best fit.",
    date: "March 25, 2025",
    readTime: "6 min read",
    content:
      "There are three common ways to finance a solar installation. Outright purchase gives the best long-term returns and full subsidy eligibility. Solar loans at 7–10% interest often have EMIs lower than monthly bill savings, making the switch cash-flow positive from month one. The RESCO model has a developer install the system at no cost while you pay a monthly fee lower than your current tariff—zero capital outlay but no ownership. For most homeowners who can access financing, a solar loan with subsidy typically delivers the best risk-adjusted return.",
  },
];

const ARTICLES_PER_PAGE = 6;
const CATEGORIES = ["Buying Guide", "Energy Savings", "Care Tips"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedTitle, setExpandedTitle] = useState(null);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = !activeCategory || a.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.content.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ARTICLES_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedArticles = filtered.slice(
    (safePage - 1) * ARTICLES_PER_PAGE,
    safePage * ARTICLES_PER_PAGE
  );

  const handleCategoryChange = (cat) => {
    setActiveCategory((prev) => (prev === cat ? null : cat));
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="bg-background text-on-background min-h-screen">
      <section className="relative overflow-hidden bg-surface py-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(187,0,19,0.18),_transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.02),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 lg:px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-xl items-start">
          <div className="space-y-md">
            <span className="inline-flex items-center gap-xs bg-primary text-on-primary px-sm py-xs rounded-sm font-label-bold text-label-bold uppercase tracking-widest">
              Solar Insights
            </span>
            <h1 className="text-display-lg font-display-lg text-on-surface leading-none">
              News, guides, and <span className="text-primary">practical solar tips</span>
            </h1>
            <p className="text-body-lg font-body-lg text-secondary">
              A stitched-style content hub for customers who want to learn before they buy. This keeps the Blog route connected and useful.
            </p>
          </div>
          <div className="space-y-md">
            {/* Search */}
            <input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full p-md border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary bg-white outline-none rounded-xl text-body-md text-on-surface placeholder:text-secondary"
            />
            {/* Category filter chips */}
            <div className="flex flex-wrap gap-xs">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-sm py-xs rounded-sm font-label-bold text-label-bold uppercase tracking-widest transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container border border-outline-variant text-secondary hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
              {activeCategory && (
                <button
                  onClick={() => { setActiveCategory(null); setCurrentPage(1); }}
                  className="px-sm py-xs rounded-sm font-label-bold text-label-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
            {/* Articles grid */}
            <div className="grid gap-md">
              {paginatedArticles.length > 0 ? (
                paginatedArticles.map((article) => (
                  <article
                    key={article.title}
                    className="bg-white rounded-xl border border-outline-variant p-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setExpandedTitle(expandedTitle === article.title ? null : article.title)}
                  >
                    <p className="text-caption font-label-bold uppercase tracking-widest text-primary">{article.category}</p>
                    <h2 className="mt-xs text-headline-md font-headline-md text-inverse-surface">{article.title}</h2>
                    <p className="mt-sm text-body-md text-secondary">{article.summary}</p>
                    <div className="mt-sm flex items-center justify-between flex-wrap gap-xs">
                      <span className="text-caption text-secondary">{article.date} · {article.readTime}</span>
                      <span className="text-caption font-label-bold text-primary uppercase tracking-widest">
                        {expandedTitle === article.title ? "Close ↑" : "Read More →"}
                      </span>
                    </div>
                    {expandedTitle === article.title && (
                      <p className="mt-md text-body-md text-secondary leading-relaxed border-t border-outline-variant pt-md">
                        {article.content}
                      </p>
                    )}
                  </article>
                ))
              ) : (
                <p className="text-body-md text-secondary py-lg text-center">No articles match your search.</p>
              )}
            </div>
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between pt-sm">
                <button
                  disabled={safePage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="px-sm py-xs rounded-sm font-label-bold text-label-bold uppercase tracking-widest border border-outline-variant text-secondary hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous
                </button>
                <span className="text-body-md text-secondary">{safePage} / {totalPages}</span>
                <button
                  disabled={safePage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="px-sm py-xs rounded-sm font-label-bold text-label-bold uppercase tracking-widest border border-outline-variant text-secondary hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-xl bg-inverse-surface text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter text-left">
          {[
            ["Solar basics", "lightbulb"],
            ["Policy updates", "newspaper"],
            ["Project case studies", "workspace_premium"],
          ].map(([label, icon]) => (
            <div key={label} className="p-lg rounded-xl border border-white/10 bg-white/5">
              <span className="material-symbols-outlined text-primary text-4xl">{icon}</span>
              <h3 className="mt-md text-headline-md font-headline-md">{label}</h3>
              <p className="mt-sm text-body-md text-surface-variant">
                More content can be dropped into this route later without changing the navigation structure.
              </p>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}