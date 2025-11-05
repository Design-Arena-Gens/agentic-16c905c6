export const metadata = {
  title: "Tools & Resources ? Post-Conflict Infrastructure",
};

export default function ToolsPage() {
  return (
    <div>
      <h1>Tools & Resources</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        Curated data sources, policy guidance, and analysis templates.
      </p>

      <h2 className="section-title">Datasets</h2>
      <div className="grid">
        <div className="card">
          <h3>OpenStreetMap</h3>
          <p>Roads, water networks, and amenities.</p>
          <a href="https://www.openstreetmap.org" target="_blank" rel="noreferrer">Open ?</a>
        </div>
        <div className="card">
          <h3>VIIRS Night Lights</h3>
          <p>Electrification and activity proxy time series.</p>
          <a href="https://eogdata.mines.edu" target="_blank" rel="noreferrer">Open ?</a>
        </div>
        <div className="card">
          <h3>Humanitarian Data Exchange (HDX)</h3>
          <p>Needs assessments, operational presence, and more.</p>
          <a href="https://data.humdata.org" target="_blank" rel="noreferrer">Open ?</a>
        </div>
      </div>

      <h2 className="section-title">Guidance</h2>
      <div className="grid">
        <div className="card">
          <h3>World Bank Lifelines</h3>
          <p>Resilient infrastructure systems and policy recommendations.</p>
          <a href="https://www.worldbank.org/en/topic/disasterriskmanagement/publication/lifelines" target="_blank" rel="noreferrer">Open ?</a>
        </div>
        <div className="card">
          <h3>OECD Fragility Framework</h3>
          <p>Understanding multi-dimensional fragility and risks.</p>
          <a href="https://www.oecd.org/dac/conflict-fragility-resilience/" target="_blank" rel="noreferrer">Open ?</a>
        </div>
        <div className="card">
          <h3>UNDP Early Recovery</h3>
          <p>Stabilization and early recovery guidance.</p>
          <a href="https://www.undp.org" target="_blank" rel="noreferrer">Open ?</a>
        </div>
      </div>

      <h2 className="section-title">Templates</h2>
      <div className="grid">
        <div className="card">
          <h3>Case Study Template</h3>
          <p>Outline for documenting systems, stakeholders, and outcomes.</p>
          <a href="#">Download ?</a>
        </div>
        <div className="card">
          <h3>Evidence Extraction Sheet</h3>
          <p>Fields for capturing program design and results.</p>
          <a href="#">Download ?</a>
        </div>
        <div className="card">
          <h3>Risk Model Inputs</h3>
          <p>CSV structure for hazards, exposure, and capacity.</p>
          <a href="#">Download ?</a>
        </div>
      </div>
    </div>
  );
}
