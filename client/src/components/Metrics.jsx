import { metrics } from "../data/siteData.js";

export default function Metrics() {
  return (
    <section className="metric-band">
      <div className="container metric-grid">
        {metrics.map((metric) => (
          <article key={metric.label} className="reveal">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
