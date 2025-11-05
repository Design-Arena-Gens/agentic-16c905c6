import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div>
          <h1>Rebuilding Critical Infrastructure in Post-Conflict Settings</h1>
          <p>
            A research hub for a PhD project exploring governance, sequencing,
            finance, and resilience in civil infrastructure reconstruction after
            conflict.
          </p>
          <div className="hero-badges">
            <span className="badge">Lifelines: energy ? water ? transport ? digital</span>
            <span className="badge">Risk & resilience</span>
            <span className="badge">Socio-technical systems</span>
            <span className="badge">Evidence synthesis</span>
          </div>
        </div>
        <div className="hero-card">
          <h3>Project at a glance</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            This site consolidates framing, methods, case studies, datasets, and
            a living bibliography to support rigorous, policy-relevant research.
          </p>
          <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="cta" href="/research">Read the framing</Link>
            <Link className="nav-link" href="/methodology">Methods</Link>
            <Link className="nav-link" href="/case-studies">Case studies</Link>
            <Link className="nav-link" href="/bibliography">Bibliography</Link>
          </div>
        </div>
      </section>

      <h2 className="section-title">Explore</h2>
      <div className="grid">
        <div className="card">
          <h3>Reconstruction frameworks</h3>
          <p>
            Governance models, institutional capacity, and coordination across
            humanitarian, development, and peace agendas.
          </p>
          <Link href="/research">Learn more ?</Link>
        </div>
        <div className="card">
          <h3>Methods & data</h3>
          <p>
            Mixed-method design: evidence synthesis, geospatial analysis,
            Bayesian risk modeling, and comparative case studies.
          </p>
          <Link href="/methodology">Learn more ?</Link>
        </div>
        <div className="card">
          <h3>Case studies</h3>
          <p>
            Country and city-level cases focusing on lifeline systems and
            interdependencies.
          </p>
          <Link href="/case-studies">Browse cases ?</Link>
        </div>
        <div className="card">
          <h3>Living bibliography</h3>
          <p>
            Curated references across engineering, planning, peacebuilding, and
            public finance ? downloadable as BibTeX.
          </p>
          <Link href="/bibliography">View library ?</Link>
        </div>
        <div className="card">
          <h3>Tools & resources</h3>
          <p>
            Datasets, policy guidance, open-source tools, and templates for
            analysis and reporting.
          </p>
          <Link href="/tools">See tools ?</Link>
        </div>
        <div className="card">
          <h3>Contact & collaboration</h3>
          <p>
            Interested in contributing data or co-authoring? Get in touch.
          </p>
          <a href="mailto:research@example.edu">Email ?</a>
        </div>
      </div>
    </div>
  );
}
