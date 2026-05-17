import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="section cta" id="contact">
      <div className="container cta-inner reveal">
        <p className="eyebrow">Get started</p>
        <h2>Ready to reclaim your team's time?</h2>
        <p>Join 8,400+ teams already using Synthos. Free plan available. No credit card required.</p>
        {submitted ? (
          <div className="success-pill">You're on the list. We'll be in touch soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="cta-form">
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter your work email"
              aria-label="Work email"
            />
            <button className="button button-accent">Get early access</button>
          </form>
        )}
        <div className="cta-notes">
          <span>Free plan forever</span>
          <span>14-day Pro trial</span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
