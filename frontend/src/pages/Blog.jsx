const articles = [
  {
    title: "Choosing the right solar system for your property",
    category: "Buying Guide",
    summary: "A quick overview of when to choose residential, commercial, or hybrid solar setups.",
  },
  {
    title: "How net metering turns excess energy into savings",
    category: "Energy Savings",
    summary: "Understand how grid-connected systems can reduce your bill after the panels are installed.",
  },
  {
    title: "Maintenance habits that keep solar systems efficient",
    category: "Care Tips",
    summary: "Simple checks that help panels stay productive through dust, weather, and seasonal changes.",
  },
];

export default function Blog() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <section className="relative overflow-hidden bg-surface py-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(187,0,19,0.18),_transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.02),transparent)]" />
        <div className="max-w-7xl mx-auto px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
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
          <div className="grid gap-md">
            {articles.map((article) => (
              <article key={article.title} className="bg-white rounded-xl border border-outline-variant p-lg shadow-sm">
                <p className="text-caption font-label-bold uppercase tracking-widest text-primary">{article.category}</p>
                <h2 className="mt-xs text-headline-md font-headline-md text-inverse-surface">{article.title}</h2>
                <p className="mt-sm text-body-md text-secondary">{article.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-xl bg-inverse-surface text-white">
        <div className="max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter text-left">
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