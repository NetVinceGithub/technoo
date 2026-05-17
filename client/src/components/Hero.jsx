import ProductPreview from "./ProductPreview.jsx";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-backdrop" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Introducing Synthos 2.0</p>
          <h1>AI workflows that learn how your business actually runs.</h1>
          <p className="hero-description">
            Synthos automates complex workflows, surfaces live insights, and connects your entire stack so your team can spend more time on the work that matters.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button button-accent">Start for free</a>
            <a href="#features" className="button button-light">See how it works</a>
          </div>
          <div className="trust-row" aria-label="Trust signals">
            <span>Rated 4.9/5 by 2,000+ teams</span>
            <span>Set up in under 10 minutes</span>
            <span>SOC 2 and GDPR compliant</span>
          </div>
        </div>
        <ProductPreview />
      </div>
    </section>
  );
}
