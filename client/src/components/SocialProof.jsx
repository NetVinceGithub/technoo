import { testimonials, trustedBrands } from "../data/siteData.js";

export default function SocialProof() {
  return (
    <section className="section proof" id="about">
      <div className="container proof-layout">
        <div className="proof-copy reveal">
          <p className="eyebrow">Social proof</p>
          <h2>Built for teams that refuse to settle.</h2>
          <p>
            From scrappy startups to global enterprises, Synthos powers teams that care about doing less busywork and more meaningful work.
          </p>
          <div className="proof-stat">
            <strong>8,400+</strong>
            <span>companies trust Synthos</span>
          </div>
          <div className="brand-row">
            {trustedBrands.map((brand) => <span key={brand}>{brand}</span>)}
          </div>
        </div>
        <div className="testimonial-stack">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="testimonial-card reveal">
              <div className="stars">★★★★★</div>
              <p>"{testimonial.quote}"</p>
              <footer>
                <span>{testimonial.initials}</span>
                <div>
                  <strong>{testimonial.author}</strong>
                  <small>{testimonial.title}</small>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
