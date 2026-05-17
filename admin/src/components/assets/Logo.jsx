import { motion } from "framer-motion";

export default function Logo({ compact = false }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="group flex items-center gap-3">
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-cyan/30 blur-xl opacity-0 transition group-hover:opacity-100" />
        <svg className="relative h-11 w-11" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="zyloLogo" x1="8" y1="8" x2="56" y2="56">
              <stop stopColor="#68E7FF" />
              <stop offset="0.5" stopColor="#7CF8C5" />
              <stop offset="1" stopColor="#FFCF70" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="18" fill="rgba(255,255,255,0.04)" />
          <path d="M16 18H48L28 40H48V46H16L36 24H16V18Z" fill="url(#zyloLogo)" />
        </svg>
      </div>
      {!compact && (
        <div>
          <div className="text-xl font-semibold tracking-[0.28em] text-white">ZYLO</div>
          <div className="text-xs text-white/45">Client command center</div>
        </div>
      )}
    </motion.div>
  );
}
