import Logo from "./Logo.jsx";

export default function Navbar() {
  return (
    <header className="nav-shell">
      <nav className="nav container">
        <Logo />
        <div className="nav-links" aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <a href="#about" className="button button-ghost">Log in</a>
          <a href="#contact" className="button button-dark">Get early access</a>
        </div>
      </nav>
    </header>
  );
}
