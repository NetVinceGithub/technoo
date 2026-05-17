import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Metrics from "./components/Metrics.jsx";
import SocialProof from "./components/SocialProof.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import useReveal from "./hooks/useReveal.js";

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Metrics />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
