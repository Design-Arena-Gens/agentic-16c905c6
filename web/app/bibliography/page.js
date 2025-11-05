export const metadata = {
  title: "Bibliography ? Post-Conflict Infrastructure",
};

const references = [
  {
    author: "World Bank",
    year: 2017,
    title: "Lifelines: The Resilient Infrastructure Opportunity",
    venue: "World Bank Group",
  },
  {
    author: "UNDP",
    year: 2020,
    title: "Guidance for Stabilization and Early Recovery",
    venue: "United Nations Development Programme",
  },
  {
    author: "OECD",
    year: 2012,
    title: "International Support to Post-Conflict Transition",
    venue: "OECD DAC",
  },
];

export default function BibliographyPage() {
  return (
    <div>
      <h1>Living Bibliography</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        Selected references across engineering, planning, peacebuilding, and public
        finance. Download the complete BibTeX file below.
      </p>

      <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
        {references.map((r) => (
          <div key={`${r.author}-${r.year}`} className="card">
            <h3>
              {r.author} ({r.year}). {r.title}
            </h3>
            <p className="muted" style={{ marginTop: 6 }}>{r.venue}</p>
          </div>
        ))}
      </div>

      <a className="cta" style={{ marginTop: 16, display: "inline-block" }} href="/bibliography.bib" download>
        Download BibTeX
      </a>
    </div>
  );
}
