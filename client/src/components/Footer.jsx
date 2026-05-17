import Logo from "./Logo.jsx";

const groups = {
  Product: ["Features", "Integrations", "Pricing", "Changelog"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy", "Terms", "Security", "DPA"],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>AI-powered workflows for modern teams. Automate anything, integrate everything, and move faster.</p>
        </div>
        {Object.entries(groups).map(([title, links]) => (
          <div key={title}>
            <h3>{title}</h3>
            {links.map((link) => <a href="#" key={link}>{link}</a>)}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Synthos, Inc. All rights reserved.</span>
        <div>
          <a href="#">X</a>
          <a href="#">in</a>
          <a href="#">gh</a>
        </div>
      </div>
    </footer>
  );
}
