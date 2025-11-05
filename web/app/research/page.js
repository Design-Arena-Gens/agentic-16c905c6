import Link from "next/link";

export const metadata = {
  title: "Research Framing ? Post-Conflict Infrastructure",
};

export default function ResearchPage() {
  return (
    <div>
      <h1>Research Framing</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        This PhD investigates how to prioritize, finance, and implement civil
        infrastructure reconstruction in post-conflict settings under deep
        uncertainty and institutional fragility.
      </p>

      <h2 className="section-title">Core questions</h2>
      <ul style={{ marginLeft: 18, display: "grid", gap: 8 }}>
        <li>How do governance arrangements shape reconstruction outcomes?</li>
        <li>What sequencing of lifeline systems minimizes cascading failures?</li>
        <li>How can limited fiscal space be allocated under risk and equity goals?</li>
        <li>Which delivery models (public, PPP, community-led) are most resilient?</li>
      </ul>

      <h2 className="section-title">Conceptual lenses</h2>
      <div className="grid">
        <div className="card">
          <h3>Systems-of-systems</h3>
          <p>Infrastructure interdependencies and compound failure modes.</p>
        </div>
        <div className="card">
          <h3>Institutional capacity</h3>
          <p>State capability, legitimacy, and coordination with non-state actors.</p>
        </div>
        <div className="card">
          <h3>Risk & resilience</h3>
          <p>Hazard-exposure-vulnerability, robustness, recoverability, adaptability.</p>
        </div>
      </div>

      <h2 className="section-title">Intended contributions</h2>
      <ul style={{ marginLeft: 18, display: "grid", gap: 8 }}>
        <li>A decision framework for sequencing and investment under constraints.</li>
        <li>Evidence synthesis across engineering, planning, and peacebuilding.</li>
        <li>Comparative case insights on governance and delivery models.</li>
        <li>Open, reusable data and templates to replicate the analysis.</li>
      </ul>

      <div style={{ marginTop: 18 }}>
        <Link className="cta" href="/methodology">Read the methodology ?</Link>
      </div>
    </div>
  );
}
