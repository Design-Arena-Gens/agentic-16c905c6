export const metadata = {
  title: "Methodology ? Post-Conflict Infrastructure",
};

export default function MethodologyPage() {
  return (
    <div>
      <h1>Methodology</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        A mixed-method design integrating evidence synthesis, geospatial
        analytics, probabilistic risk modeling, and comparative case study.
      </p>

      <h2 className="section-title">Design</h2>
      <ol style={{ marginLeft: 18, display: "grid", gap: 8 }}>
        <li>
          Scoping review and realist synthesis of post-conflict infrastructure
          programs and outcomes.
        </li>
        <li>
          Geospatial mapping of damage, access, and exposure using open data and
          satellite-derived proxies.
        </li>
        <li>
          Bayesian decision model for sequencing and investment under multiple
          objectives and constraints.
        </li>
        <li>
          Comparative case studies with process tracing of governance and
          delivery choices.
        </li>
      </ol>

      <h2 className="section-title">Data sources</h2>
      <div className="grid">
        <div className="card">
          <h3>OpenStreetMap & night lights</h3>
          <p>Network topology, accessibility, and electrification proxies.</p>
        </div>
        <div className="card">
          <h3>Humanitarian datasets</h3>
          <p>Needs, damage assessments, and service coverage.</p>
        </div>
        <div className="card">
          <h3>Public finance</h3>
          <p>Budget constraints, donor flows, and PPP pipelines.</p>
        </div>
      </div>

      <h2 className="section-title">Outputs</h2>
      <ul style={{ marginLeft: 18, display: "grid", gap: 8 }}>
        <li>Replicable notebooks and data processing pipelines.</li>
        <li>Policy briefs and technical guidance for reconstruction planners.</li>
        <li>Open datasets and a living bibliography.</li>
      </ul>
    </div>
  );
}
