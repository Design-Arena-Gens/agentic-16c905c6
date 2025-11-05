export const metadata = {
  title: "Case Studies ? Post-Conflict Infrastructure",
};

const cases = [
  {
    title: "City A ? Power and Water Interdependencies",
    summary:
      "Sequencing electricity substation restoration with trunk water mains to stabilize service recovery.",
    region: "MENA",
  },
  {
    title: "Country B ? Road Corridors and Access",
    summary:
      "Reopening primary road corridors to reconnect markets and health services under security constraints.",
    region: "SSA",
  },
  {
    title: "City C ? Digital Connectivity",
    summary:
      "Restoring backhaul and last-mile coverage to enable cash assistance and e-government services.",
    region: "CEE",
  },
];

export default function CaseStudiesPage() {
  return (
    <div>
      <h1>Case Studies</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        Comparative cases focus on lifeline systems, institutional capacity, and
        delivery models in diverse post-conflict contexts.
      </p>

      <div className="grid" style={{ marginTop: 8 }}>
        {cases.map((c) => (
          <div key={c.title} className="card">
            <h3>{c.title}</h3>
            <p style={{ marginTop: 8 }}>{c.summary}</p>
            <p className="muted" style={{ marginTop: 8 }}>Region: {c.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
