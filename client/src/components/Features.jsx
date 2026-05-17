import Icon from "./Icon.jsx";
import { features } from "../data/siteData.js";

export default function Features() {
  return (
    <section className="section section-dark" id="features">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Platform</p>
          <h2>Everything your team needs to move faster.</h2>
          <p>Six powerful capabilities, one unified platform. Synthos replaces scattered tools with an AI layer that thinks alongside you.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card reveal">
              <div className="feature-icon"><Icon name={feature.icon} /></div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span>{feature.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
