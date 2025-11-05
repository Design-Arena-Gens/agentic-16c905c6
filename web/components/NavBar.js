"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <span className="brand-badge">IR</span>
          <span>Post-Conflict Infrastructure</span>
        </Link>
        <div className="nav-links">
          <Link className="nav-link" href="/research">Research</Link>
          <Link className="nav-link" href="/methodology">Methodology</Link>
          <Link className="nav-link" href="/case-studies">Case Studies</Link>
          <Link className="nav-link" href="/bibliography">Bibliography</Link>
          <Link className="cta" href="/tools">Tools</Link>
        </div>
      </div>
    </nav>
  );
}
