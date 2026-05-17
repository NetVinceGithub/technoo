import { motion } from "framer-motion";
import Logo from "../components/assets/Logo.jsx";

export default function AuthLayout({ children }) {
  return (
    <main className="soft-grid relative min-h-screen overflow-hidden px-4 py-6">
      <div className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-6rem] h-80 w-80 rounded-full bg-mint/10 blur-3xl" />
      <div className="relative mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <Logo />
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan">Agency operations suite</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Premium delivery control for every client launch.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/58">
              ZYLO turns projects, deployments, billing, and analytics into one calm command center for teams and clients.
            </p>
          </div>
          <div className="glass max-w-xl rounded-3xl p-4 shadow-glow">
            <div className="mb-4 flex items-center justify-between text-sm text-white/48">
              <span>Live dashboard preview</span>
              <span>99.98% uptime</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Revenue +18%", "Deployments 12", "Clients 48"].map((item) => (
                <div key={item} className="rounded-2xl bg-white/[0.05] p-4 text-sm text-white/72">{item}</div>
              ))}
            </div>
            <div className="mt-3 h-40 rounded-2xl bg-[linear-gradient(120deg,rgba(104,231,255,.12),rgba(124,248,197,.06),rgba(255,207,112,.08))]" />
          </div>
        </motion.section>
        {children}
      </div>
    </main>
  );
}
