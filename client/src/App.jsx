import { useState, useEffect, useRef } from "react";

const FONT_LINK = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');
`;

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #0a0a0f;
    --ink-2: #16161f;
    --ink-3: #1e1e2a;
    --surface: #f7f6f2;
    --surface-2: #eeecea;
    --accent: #c8f04a;
    --accent-2: #a8d63a;
    --glow: rgba(200,240,74,0.18);
    --text: #0a0a0f;
    --text-muted: #6b6b7a;
    --text-light: #9999aa;
    --border: rgba(10,10,15,0.09);
    --border-strong: rgba(10,10,15,0.18);
    --serif: 'Instrument Serif', Georgia, serif;
    --sans: 'DM Sans', system-ui, sans-serif;
    --radius: 16px;
    --radius-sm: 10px;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--sans);
    background: var(--surface);
    color: var(--text);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 0 5vw;
    height: 68px;
    display: flex; align-items: center; justify-content: space-between;
    background: rgba(247,246,242,0.82);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid var(--border);
    transition: background 0.3s;
  }
  .nav-logo {
    display: flex; align-items: center; gap: 9px;
    font-family: var(--serif); font-size: 1.45rem;
    color: var(--ink); text-decoration: none; letter-spacing: -0.02em;
  }
  .nav-logo-dot {
    width: 9px; height: 9px; border-radius: 50%;
    background: var(--accent); box-shadow: 0 0 0 4px var(--glow);
    animation: pulse 2.6s ease-in-out infinite;
  }
  @keyframes pulse {
    0%,100% { box-shadow: 0 0 0 4px var(--glow); }
    50% { box-shadow: 0 0 0 8px rgba(200,240,74,0.06); }
  }
  .nav-links {
    display: flex; align-items: center; gap: 32px; list-style: none;
  }
  .nav-links a {
    font-size: 0.9rem; font-weight: 450; color: var(--text-muted);
    text-decoration: none; transition: color 0.2s;
    letter-spacing: 0.01em;
  }
  .nav-links a:hover { color: var(--ink); }
  .nav-cta {
    display: flex; align-items: center; gap: 12px;
  }
  .btn {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 22px; border-radius: 100px;
    font-family: var(--sans); font-size: 0.875rem; font-weight: 500;
    cursor: pointer; transition: all 0.2s; text-decoration: none;
    border: none; letter-spacing: 0.01em;
  }
  .btn-ghost {
    background: transparent; color: var(--text-muted); border: 1px solid var(--border-strong);
  }
  .btn-ghost:hover { background: var(--surface-2); color: var(--ink); }
  .btn-primary {
    background: var(--ink); color: var(--surface);
    box-shadow: 0 2px 12px rgba(10,10,15,0.14);
  }
  .btn-primary:hover { background: var(--ink-2); transform: translateY(-1px); box-shadow: 0 4px 20px rgba(10,10,15,0.2); }
  .btn-accent {
    background: var(--accent); color: var(--ink); font-weight: 600;
    box-shadow: 0 0 0 0 var(--glow);
  }
  .btn-accent:hover { background: var(--accent-2); transform: translateY(-1px); box-shadow: 0 4px 24px var(--glow); }
  .btn-large {
    padding: 14px 32px; font-size: 1rem; border-radius: 100px;
  }

  /* HERO */
  .hero {
    min-height: 100vh;
    padding: 130px 5vw 80px;
    display: flex; flex-direction: column; align-items: center;
    position: relative; overflow: hidden;
  }
  .hero-bg {
    position: absolute; inset: 0; pointer-events: none; z-index: 0;
  }
  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.55;
  }
  .hero-orb-1 {
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(200,240,74,0.35) 0%, transparent 70%);
    top: -100px; left: 50%; transform: translateX(-50%);
    animation: drift1 8s ease-in-out infinite;
  }
  .hero-orb-2 {
    width: 350px; height: 350px;
    background: radial-gradient(circle, rgba(120,180,255,0.2) 0%, transparent 70%);
    top: 200px; right: -80px;
    animation: drift2 10s ease-in-out infinite;
  }
  .hero-orb-3 {
    width: 280px; height: 280px;
    background: radial-gradient(circle, rgba(255,180,120,0.18) 0%, transparent 70%);
    bottom: 100px; left: -60px;
    animation: drift1 12s ease-in-out infinite reverse;
  }
  @keyframes drift1 {
    0%,100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-30px); }
  }
  @keyframes drift2 {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(25px); }
  }
  .hero-grid {
    position: absolute; inset: 0;
    background-image: linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 0%, transparent 100%);
    opacity: 0.6;
  }

  .hero-content {
    position: relative; z-index: 1;
    display: flex; flex-direction: column; align-items: center;
    text-align: center; max-width: 860px;
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 16px; border-radius: 100px;
    background: var(--ink); color: var(--surface);
    font-size: 0.8rem; font-weight: 500; letter-spacing: 0.04em;
    margin-bottom: 32px;
    animation: fadeUp 0.6s ease both;
  }
  .hero-badge-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--accent);
    animation: pulse 1.8s ease-in-out infinite;
  }
  .hero-h1 {
    font-family: var(--serif);
    font-size: clamp(3rem, 7vw, 5.5rem);
    line-height: 1.05; letter-spacing: -0.03em;
    color: var(--ink); margin-bottom: 24px;
    animation: fadeUp 0.7s 0.1s ease both;
  }
  .hero-h1 em {
    font-style: italic; color: var(--text-muted);
  }
  .hero-h1 .accent-word {
    position: relative; display: inline-block;
  }
  .hero-h1 .accent-word::after {
    content: ''; position: absolute; left: 0; bottom: 4px; right: 0;
    height: 6px; background: var(--accent); border-radius: 3px;
    opacity: 0.55; z-index: -1;
  }
  .hero-sub {
    font-size: clamp(1rem, 2vw, 1.2rem); font-weight: 350;
    color: var(--text-muted); max-width: 560px; line-height: 1.7;
    margin-bottom: 40px;
    animation: fadeUp 0.7s 0.2s ease both;
  }
  .hero-actions {
    display: flex; align-items: center; gap: 14px; flex-wrap: wrap; justify-content: center;
    margin-bottom: 56px;
    animation: fadeUp 0.7s 0.3s ease both;
  }
  .hero-trust {
    display: flex; align-items: center; gap: 24px;
    animation: fadeUp 0.7s 0.4s ease both;
  }
  .hero-trust-item {
    display: flex; align-items: center; gap: 8px;
    font-size: 0.82rem; color: var(--text-muted); font-weight: 450;
  }
  .hero-trust-item svg { color: var(--accent); }
  .hero-divider {
    width: 1px; height: 18px; background: var(--border-strong);
  }

  /* MOCKUP */
  .hero-mockup {
    position: relative; z-index: 1;
    margin-top: 56px; width: 100%; max-width: 900px;
    animation: fadeUp 0.9s 0.5s ease both;
  }
  .mockup-shell {
    background: var(--ink);
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.08);
    overflow: hidden;
    box-shadow: 0 40px 100px rgba(10,10,15,0.22), 0 0 0 1px rgba(255,255,255,0.05);
  }
  .mockup-bar {
    height: 44px; background: var(--ink-2);
    display: flex; align-items: center; padding: 0 18px; gap: 8px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .mockup-dot { width: 10px; height: 10px; border-radius: 50%; }
  .mockup-body {
    padding: 24px;
    display: grid; grid-template-columns: 220px 1fr; gap: 16px;
    min-height: 300px;
  }
  .mockup-sidebar {
    background: var(--ink-3); border-radius: var(--radius-sm);
    padding: 16px; display: flex; flex-direction: column; gap: 8px;
  }
  .mockup-sidebar-item {
    padding: 10px 12px; border-radius: 8px;
    font-size: 0.78rem; color: rgba(255,255,255,0.5);
    display: flex; align-items: center; gap: 10px;
    transition: all 0.2s;
  }
  .mockup-sidebar-item.active {
    background: rgba(200,240,74,0.12); color: var(--accent);
  }
  .mockup-sidebar-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; flex-shrink: 0; }
  .mockup-main {
    display: flex; flex-direction: column; gap: 14px;
  }
  .mockup-card {
    background: var(--ink-3); border-radius: var(--radius-sm);
    padding: 16px;
    border: 1px solid rgba(255,255,255,0.05);
  }
  .mockup-card-title {
    font-size: 0.7rem; color: rgba(255,255,255,0.35);
    letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 12px;
  }
  .mockup-stat {
    font-size: 1.8rem; font-family: var(--serif); color: white; letter-spacing: -0.02em;
  }
  .mockup-stat-sub { font-size: 0.72rem; color: var(--accent); margin-top: 2px; }
  .mockup-bar-chart {
    display: flex; align-items: flex-end; gap: 6px; height: 60px; margin-top: 8px;
  }
  .mockup-bar-item {
    flex: 1; background: rgba(200,240,74,0.15); border-radius: 4px 4px 0 0;
    position: relative; overflow: hidden;
  }
  .mockup-bar-fill {
    position: absolute; bottom: 0; left: 0; right: 0;
    background: var(--accent); border-radius: 4px 4px 0 0;
    opacity: 0.8;
  }
  .mockup-pills {
    display: flex; gap: 6px; flex-wrap: wrap;
  }
  .mockup-pill {
    padding: 4px 10px; border-radius: 100px;
    font-size: 0.7rem; background: rgba(255,255,255,0.07);
    color: rgba(255,255,255,0.6);
  }
  .mockup-pill.green { background: rgba(200,240,74,0.15); color: var(--accent); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* SECTION SHARED */
  section { padding: 100px 5vw; }
  .section-label {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 0.78rem; font-weight: 600; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--text-muted);
    margin-bottom: 20px;
  }
  .section-label::before {
    content: ''; display: block;
    width: 20px; height: 2px; background: var(--accent); border-radius: 2px;
  }
  .section-h2 {
    font-family: var(--serif); font-size: clamp(2.2rem, 5vw, 3.6rem);
    letter-spacing: -0.03em; line-height: 1.1; color: var(--ink);
    margin-bottom: 20px;
  }
  .section-sub {
    font-size: 1.05rem; color: var(--text-muted); line-height: 1.7; max-width: 520px;
  }

  /* FEATURES */
  .features {
    background: var(--ink);
    color: white;
  }
  .features .section-label { color: rgba(255,255,255,0.4); }
  .features .section-h2 { color: white; }
  .features .section-sub { color: rgba(255,255,255,0.5); }
  .features-header {
    max-width: 640px; margin-bottom: 64px;
  }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 2px;
    background: rgba(255,255,255,0.06);
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.06);
  }
  .feature-card {
    background: var(--ink);
    padding: 40px 36px;
    position: relative;
    overflow: hidden;
    transition: background 0.3s;
    cursor: default;
  }
  .feature-card::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(circle at 0% 100%, rgba(200,240,74,0.08) 0%, transparent 60%);
    opacity: 0; transition: opacity 0.4s;
  }
  .feature-card:hover::before { opacity: 1; }
  .feature-card:hover { background: var(--ink-2); }
  .feature-icon {
    width: 48px; height: 48px; border-radius: var(--radius-sm);
    background: rgba(200,240,74,0.1);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 24px;
    transition: background 0.3s;
    font-size: 1.3rem;
  }
  .feature-card:hover .feature-icon { background: rgba(200,240,74,0.18); }
  .feature-title {
    font-size: 1.1rem; font-weight: 600; color: white;
    margin-bottom: 12px; letter-spacing: -0.01em;
  }
  .feature-desc {
    font-size: 0.9rem; color: rgba(255,255,255,0.45); line-height: 1.7;
  }
  .feature-tag {
    display: inline-block; margin-top: 20px;
    padding: 4px 12px; border-radius: 100px;
    font-size: 0.72rem; font-weight: 500; letter-spacing: 0.04em;
    background: rgba(200,240,74,0.1); color: var(--accent);
  }

  /* METRICS STRIP */
  .metrics {
    background: var(--accent);
    padding: 48px 5vw;
    display: flex; justify-content: center;
  }
  .metrics-inner {
    display: flex; align-items: center; gap: 0;
    flex-wrap: wrap; justify-content: center;
    max-width: 900px; width: 100%;
  }
  .metric-item {
    flex: 1; min-width: 180px;
    text-align: center; padding: 20px 32px;
    position: relative;
  }
  .metric-item + .metric-item::before {
    content: ''; position: absolute; left: 0; top: 25%; bottom: 25%;
    width: 1px; background: rgba(10,10,15,0.15);
  }
  .metric-value {
    font-family: var(--serif); font-size: 3rem;
    color: var(--ink); letter-spacing: -0.04em; line-height: 1;
  }
  .metric-label {
    font-size: 0.82rem; font-weight: 500; color: rgba(10,10,15,0.6);
    margin-top: 6px; letter-spacing: 0.02em;
  }

  /* PROOF */
  .proof {
    background: var(--surface);
  }
  .proof-layout {
    display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start;
  }
  .proof-text { }
  .company-line {
    display: flex; align-items: center; gap: 16px; margin-top: 32px;
  }
  .company-logo {
    width: 44px; height: 44px; border-radius: var(--radius-sm);
    background: var(--ink); display: flex; align-items: center; justify-content: center;
    color: var(--accent); font-size: 1.1rem;
  }
  .company-name { font-size: 0.95rem; font-weight: 600; }
  .company-role { font-size: 0.8rem; color: var(--text-muted); }

  .testimonials { display: flex; flex-direction: column; gap: 20px; }
  .testimonial-card {
    background: white; border-radius: var(--radius);
    padding: 28px 30px;
    border: 1px solid var(--border);
    box-shadow: 0 2px 16px rgba(10,10,15,0.04);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .testimonial-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(10,10,15,0.08);
  }
  .testimonial-stars {
    display: flex; gap: 3px; margin-bottom: 14px;
  }
  .star { color: #f5a623; font-size: 0.9rem; }
  .testimonial-quote {
    font-size: 0.95rem; line-height: 1.7; color: var(--text-muted);
    font-style: italic; margin-bottom: 18px;
  }
  .testimonial-author {
    display: flex; align-items: center; gap: 12px;
  }
  .author-avatar {
    width: 36px; height: 36px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.85rem; font-weight: 700; color: white;
  }
  .author-name { font-size: 0.88rem; font-weight: 600; }
  .author-title { font-size: 0.78rem; color: var(--text-light); }

  /* CTA */
  .cta-section {
    background: var(--ink);
    position: relative; overflow: hidden;
    text-align: center;
  }
  .cta-bg-glow {
    position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse 80% 60% at 50% 100%, rgba(200,240,74,0.12) 0%, transparent 70%);
  }
  .cta-content {
    position: relative; z-index: 1;
    max-width: 700px; margin: 0 auto;
  }
  .cta-h2 {
    font-family: var(--serif); font-size: clamp(2.4rem, 5vw, 4rem);
    color: white; letter-spacing: -0.03em; line-height: 1.1;
    margin-bottom: 20px;
  }
  .cta-sub {
    font-size: 1.05rem; color: rgba(255,255,255,0.5); line-height: 1.7;
    max-width: 480px; margin: 0 auto 40px;
  }
  .cta-form {
    display: flex; gap: 10px; max-width: 440px; margin: 0 auto 56px;
    flex-wrap: wrap; justify-content: center;
  }
  .cta-input {
    flex: 1; min-width: 220px;
    padding: 14px 20px; border-radius: 100px;
    background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12);
    color: white; font-family: var(--sans); font-size: 0.9rem;
    outline: none; transition: border-color 0.2s;
  }
  .cta-input::placeholder { color: rgba(255,255,255,0.3); }
  .cta-input:focus { border-color: var(--accent); }

  /* FOOTER */
  .footer {
    background: var(--ink-2);
    border-top: 1px solid rgba(255,255,255,0.06);
    padding: 48px 5vw 32px;
  }
  .footer-inner {
    display: grid; grid-template-columns: 1.5fr repeat(3, 1fr); gap: 40px;
    margin-bottom: 48px;
  }
  .footer-brand-name {
    font-family: var(--serif); font-size: 1.4rem; color: white;
    letter-spacing: -0.02em; margin-bottom: 12px;
    display: flex; align-items: center; gap: 9px;
  }
  .footer-brand-desc {
    font-size: 0.85rem; color: rgba(255,255,255,0.35); line-height: 1.7;
    max-width: 240px;
  }
  .footer-col-title {
    font-size: 0.78rem; font-weight: 600; letter-spacing: 0.08em;
    text-transform: uppercase; color: rgba(255,255,255,0.35);
    margin-bottom: 16px;
  }
  .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .footer-links a {
    font-size: 0.88rem; color: rgba(255,255,255,0.45);
    text-decoration: none; transition: color 0.2s;
  }
  .footer-links a:hover { color: white; }
  .footer-bottom {
    display: flex; justify-content: space-between; align-items: center;
    padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.07);
    flex-wrap: wrap; gap: 12px;
  }
  .footer-copy {
    font-size: 0.8rem; color: rgba(255,255,255,0.25);
  }
  .footer-socials { display: flex; gap: 16px; }
  .social-link {
    width: 34px; height: 34px; border-radius: 8px;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08);
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.4); text-decoration: none;
    transition: all 0.2s; font-size: 0.85rem;
  }
  .social-link:hover { background: rgba(200,240,74,0.12); color: var(--accent); border-color: rgba(200,240,74,0.2); }

  /* Scroll reveal */
  .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
  .reveal-delay-4 { transition-delay: 0.4s; }

  /* Mobile */
  @media (max-width: 768px) {
    .nav-links { display: none; }
    .proof-layout { grid-template-columns: 1fr; gap: 48px; }
    .footer-inner { grid-template-columns: 1fr 1fr; }
    .mockup-body { grid-template-columns: 1fr; }
    .mockup-sidebar { display: none; }
    .hero-trust { flex-wrap: wrap; justify-content: center; }
    .metrics-inner { gap: 0; }
    .metric-item { min-width: 140px; }
  }
  @media (max-width: 480px) {
    .footer-inner { grid-template-columns: 1fr; }
    .footer-bottom { flex-direction: column; align-items: flex-start; }
  }
`;

const BAR_HEIGHTS = [40, 65, 50, 80, 60, 90, 70];

function MockupUI() {
  return (
    <div className="hero-mockup">
      <div className="mockup-shell">
        <div className="mockup-bar">
          <div className="mockup-dot" style={{ background: "#ff5f57" }} />
          <div className="mockup-dot" style={{ background: "#febc2e" }} />
          <div className="mockup-dot" style={{ background: "#28c840" }} />
        </div>
        <div className="mockup-body">
          <div className="mockup-sidebar">
            {[
              { label: "Dashboard", active: true },
              { label: "AI Workflows" },
              { label: "Analytics" },
              { label: "Integrations" },
              { label: "Team" },
            ].map((item) => (
              <div key={item.label} className={`mockup-sidebar-item${item.active ? " active" : ""}`}>
                <div className="mockup-sidebar-dot" />
                {item.label}
              </div>
            ))}
          </div>
          <div className="mockup-main">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div className="mockup-card">
                <div className="mockup-card-title">Tasks Automated</div>
                <div className="mockup-stat">1,284</div>
                <div className="mockup-stat-sub">↑ 34% this week</div>
              </div>
              <div className="mockup-card">
                <div className="mockup-card-title">Hours Saved</div>
                <div className="mockup-stat">312h</div>
                <div className="mockup-stat-sub">↑ 18% this month</div>
              </div>
            </div>
            <div className="mockup-card">
              <div className="mockup-card-title">Workflow Performance</div>
              <div className="mockup-bar-chart">
                {BAR_HEIGHTS.map((h, i) => (
                  <div key={i} className="mockup-bar-item">
                    <div className="mockup-bar-fill" style={{ height: `${h}%` }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mockup-card">
              <div className="mockup-card-title">Active Workflows</div>
              <div className="mockup-pills">
                {["Email Triage", "CRM Sync", "Report Gen", "Lead Scoring", "Meeting Notes"].map((p, i) => (
                  <div key={p} className={`mockup-pill${i < 2 ? " green" : ""}`}>{p}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="testimonial-stars">
      {[...Array(5)].map((_, i) => <span key={i} className="star">★</span>)}
    </div>
  );
}

const features = [
  {
    icon: "🧠",
    title: "AI Workflow Builder",
    desc: "Drag-and-drop automations powered by large language models. Connect any tool, any process — without code.",
    tag: "No-code",
  },
  {
    icon: "⚡",
    title: "Real-Time Intelligence",
    desc: "Live insights surface automatically. Synthos reads your data streams and surfaces what matters, when it matters.",
    tag: "Live data",
  },
  {
    icon: "🔗",
    title: "Universal Integrations",
    desc: "Connect 500+ tools in seconds. Slack, Notion, Salesforce, GitHub, Gmail — your entire stack, unified.",
    tag: "500+ apps",
  },
  {
    icon: "🛡️",
    title: "Enterprise Security",
    desc: "SOC 2 Type II, GDPR compliant, and end-to-end encrypted. Your data never leaves your control.",
    tag: "SOC 2",
  },
  {
    icon: "📊",
    title: "Team Analytics",
    desc: "Understand where time is spent, what's working, and what to automate next — across every team member.",
    tag: "Team insights",
  },
  {
    icon: "🤝",
    title: "Collaborative Workspaces",
    desc: "Shared AI workflows, version history, and role-based access so your whole team can build together.",
    tag: "Multiplayer",
  },
];

const testimonials = [
  {
    quote: "Synthos completely changed how our ops team works. We automated 60% of our manual reporting in the first week alone.",
    author: "Sarah Chen",
    title: "Head of Operations, Prism Labs",
    initials: "SC",
    bg: "#2d6a4f",
  },
  {
    quote: "The AI workflow builder is genuinely magic. It understood our process immediately and built something better than what we had planned.",
    author: "Marcus Rivera",
    title: "CTO, Voltare Fintech",
    initials: "MR",
    bg: "#1d3557",
  },
  {
    quote: "Our team saves 14 hours per week per person. ROI was clear within the first month.",
    author: "Aiko Tanaka",
    title: "VP Product, Skyline Commerce",
    initials: "AT",
    bg: "#6b2d4f",
  },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function SynthosLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  useReveal();

  const handleSubmit = (e) => {
    e.preventDefault && e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <>
      <style>{FONT_LINK}{styles}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="#" className="nav-logo">
          <div className="nav-logo-dot" />
          Synthos
        </a>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-cta">
          <a href="#" className="btn btn-ghost">Log in</a>
          <a href="#contact" className="btn btn-primary">Get early access →</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            Introducing Synthos 2.0 — Now with Agentic AI
          </div>

          <h1 className="hero-h1">
            Work <em>smarter</em> with AI<br />
            that <span className="accent-word">actually</span> learns your business
          </h1>

          <p className="hero-sub">
            Synthos is the AI productivity platform that automates complex workflows,
            surfaces real-time insights, and connects your entire stack — so your team
            can focus on work that matters.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-accent btn-large">
              Start for free — no credit card
            </a>
            <a href="#features" className="btn btn-ghost btn-large">
              See how it works ↓
            </a>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.3l-3.7 2 .7-4.1-3-2.9 4.2-.7z" fill="currentColor" />
              </svg>
              Rated 4.9/5 by 2,000+ teams
            </div>
            <div className="hero-divider" />
            <div className="hero-trust-item">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 1a6.5 6.5 0 100 13A6.5 6.5 0 007.5 1zm3 7H7.5a.5.5 0 01-.5-.5v-4a.5.5 0 011 0V7H10.5a.5.5 0 010 1z" fill="currentColor" />
              </svg>
              Set up in under 10 minutes
            </div>
            <div className="hero-divider" />
            <div className="hero-trust-item">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 1L2 3.5v4C2 10.6 4.5 13.5 7.5 14c3-0.5 5.5-3.4 5.5-6.5v-4L7.5 1z" fill="currentColor" />
              </svg>
              SOC 2 & GDPR compliant
            </div>
          </div>
        </div>

        <MockupUI />
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="features-header reveal">
          <div className="section-label">Platform</div>
          <h2 className="section-h2">Everything your team needs to move faster</h2>
          <p className="section-sub">
            Six powerful capabilities, one unified platform. Synthos replaces a dozen disconnected tools with an AI layer that thinks alongside you.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={f.title} className={`feature-card reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
              <div className="feature-tag">{f.tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* METRICS */}
      <div className="metrics">
        <div className="metrics-inner">
          {[
            { value: "14h", label: "Saved per person / week" },
            { value: "500+", label: "App integrations" },
            { value: "99.9%", label: "Platform uptime" },
            { value: "8,400+", label: "Teams worldwide" },
          ].map((m) => (
            <div key={m.label} className="metric-item reveal">
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROOF */}
      <section className="proof" id="about">
        <div className="proof-layout">
          <div className="proof-text">
            <div className="section-label reveal">Social proof</div>
            <h2 className="section-h2 reveal reveal-delay-1">Built for teams that refuse to settle</h2>
            <p className="section-sub reveal reveal-delay-2">
              From scrappy startups to Fortune 500 enterprises, Synthos powers the workflows of teams that care about doing less busywork and more meaningful work.
            </p>
            <div className="company-line reveal reveal-delay-3">
              <div className="company-logo">🏢</div>
              <div>
                <div className="company-name">Trusted by 8,400+ companies</div>
                <div className="company-role">including Prism Labs, Voltare, Skyline Commerce and more</div>
              </div>
            </div>
            <div style={{ marginTop: 40 }} className="reveal reveal-delay-4">
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: 16, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                Featured in
              </div>
              <div style={{ display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}>
                {["TechCrunch", "Forbes", "Product Hunt", "The Verge"].map((pub) => (
                  <span key={pub} style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-light)", letterSpacing: "-0.01em" }}>
                    {pub}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="testimonials">
            {testimonials.map((t, i) => (
              <div key={t.author} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
                <Stars />
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{ background: t.bg }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="author-name">{t.author}</div>
                    <div className="author-title">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="cta-bg-glow" />
        <div className="cta-content">
          <div className="section-label reveal" style={{ color: "rgba(255,255,255,0.35)", justifyContent: "center" }}>
            Get started
          </div>
          <h2 className="cta-h2 reveal reveal-delay-1">
            Ready to reclaim your team's time?
          </h2>
          <p className="cta-sub reveal reveal-delay-2">
            Join 8,400+ teams already using Synthos. Free plan available.
            No credit card required.
          </p>
          <div className="cta-form reveal reveal-delay-3">
            {submitted ? (
              <div style={{
                padding: "16px 32px", borderRadius: "100px",
                background: "rgba(200,240,74,0.15)", border: "1px solid rgba(200,240,74,0.3)",
                color: "var(--accent)", fontSize: "0.95rem", fontWeight: 500
              }}>
                ✓ You're on the list! We'll be in touch soon.
              </div>
            ) : (
              <>
                <input
                  className="cta-input"
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                />
                <button className="btn btn-accent btn-large" onClick={handleSubmit}>
                  Get early access
                </button>
              </>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }} className="reveal reveal-delay-4">
            {[
              "✓ Free plan forever",
              "✓ 14-day Pro trial",
              "✓ Cancel anytime",
            ].map((item) => (
              <span key={item} style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.35)", fontWeight: 450 }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-brand-name">
              <div className="nav-logo-dot" />
              Synthos
            </div>
            <div className="footer-brand-desc">
              AI-powered workflows for modern teams. Automate anything, integrate everything, move faster.
            </div>
          </div>

          <div>
            <div className="footer-col-title">Product</div>
            <ul className="footer-links">
              {["Features", "Integrations", "Pricing", "Changelog", "Roadmap"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              {["About", "Blog", "Careers", "Press", "Contact"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Legal</div>
            <ul className="footer-links">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security", "DPA"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">© 2025 Synthos, Inc. All rights reserved.</div>
          <div className="footer-socials">
            {["𝕏", "in", "gh", "yt"].map((s) => (
              <a key={s} href="#" className="social-link">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}