export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="muted">? {new Date().getFullYear()} PhD Research ? Infrastructure Reconstruction</p>
        <div style={{ display: "flex", gap: 12 }}>
          <a className="nav-link" href="/bibliography">Cite</a>
          <a className="nav-link" href="mailto:research@example.edu">Contact</a>
        </div>
      </div>
    </footer>
  );
}
