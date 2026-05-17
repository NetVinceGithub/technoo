import { motion } from "framer-motion";
import Logo from "../components/assets/Logo.jsx";

export default function AuthLayout({ children }) {
  return (
    <main className="soft-grid relative min-h-screen overflow-hidden px-4 py-4">
      <div className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-6rem] h-80 w-80 rounded-full bg-mint/10 blur-3xl" />
      <div className="relative mx-auto grid min-h-[calc(100vh-2rem)] max-w-7xl items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <Logo />
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan">LAUNCH OPERATING SYSTEM</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-white md:text-5xl">
             Built for precision, speed, and scalable growth.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/58 md:text-base">
              ByteForce turns projects, deployments, billing, and analytics into one calm command center for teams and clients.
            </p>
          </div>
          <div className="glass max-w-xl rounded-3xl p-4 shadow-glow">
            <div className="mb-3 flex items-center justify-between text-sm text-white/48">
              <span>Live dashboard preview</span>
              <span>99.98% uptime</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Revenue +18%", "Deployments 12", "Clients 48"].map((item) => (
                <div key={item} className="rounded-2xl bg-white/[0.05] p-4 text-sm text-white/72">{item}</div>
              ))}
            </div>
            <div className="mt-3 grid gap-3 rounded-2xl bg-white/[0.035] p-3 sm:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-2xl bg-black/15 p-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-white/38">Launch velocity</div>
                    <div className="mt-1.5 text-sm text-white/62">Weekly release momentum</div>
                  </div>
                  <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-cyan">7 days</span>
                </div>
                <div className="mt-3 rounded-2xl bg-white/[0.025] px-3 pb-2 pt-3">
                  <div className="flex h-20 items-end gap-2">
                    {[36, 58, 45, 72, 64, 88, 76].map((value, index) => (
                      <div key={`${value}-${index}`} className="relative flex h-full flex-1 items-end">
                        <div className="absolute inset-x-0 bottom-0 rounded-t-xl bg-white/[0.035]" style={{ height: "100%" }} />
                        <div className="relative w-full rounded-t-xl bg-gradient-to-t from-cyan/25 via-cyan to-mint shadow-[0_0_18px_rgba(104,231,255,0.18)]" style={{ height: `${value}%` }} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 grid grid-cols-7 text-center text-[11px] text-white/32">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                      <span key={`${day}-${index}`}>{day}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-3">
                {[
                  ["Active launches", "12"],
                  ["Approval queue", "04"],
                  ["Avg. turnaround", "2.3d"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-black/15 p-2.5">
                    <div className="text-xs text-white/38">{label}</div>
                    <div className="mt-2 text-lg font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
        {children}
      </div>
    </main>
  );
}
