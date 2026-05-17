import { motion } from "framer-motion";

export default function Logo({ compact = false }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="group flex items-center gap-3">
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-cyan/30 blur-xl opacity-0 transition group-hover:opacity-100" />
        <svg className="relative h-11 w-11" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="byteForceLogo" x1="8" y1="8" x2="56" y2="56">
              <stop stopColor="#84F1FF" />
              <stop offset="0.5" stopColor="#2CA8FF" />
              <stop offset="1" stopColor="#0B74FF" />
            </linearGradient>
            <linearGradient id="byteForceEdge" x1="18" y1="12" x2="46" y2="56">
              <stop stopColor="#FFB25B" />
              <stop offset="1" stopColor="#FF6A00" />
            </linearGradient>
            <filter id="byteForceGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect width="64" height="64" rx="18" fill="rgba(255,255,255,0.04)" />
          <path d="M39 6 18 34H31L20 58 46 26H33L39 6Z" fill="url(#byteForceEdge)" opacity="0.9" />
          <path d="M42 5 22 31H35L24 56 48 24H36L42 5Z" fill="url(#byteForceLogo)" />
          <path className="byteforce-arc byteforce-arc-left" d="M18 16 14 22 18 27 13 35 17 39" />
          <path className="byteforce-arc byteforce-arc-right" d="M48 15 52 20 48 26 53 31 49 39" />
          <path className="byteforce-arc byteforce-arc-bottom" d="M18 47 12 50 17 54 11 58" />
        </svg>
      </div>
      {!compact && (
        <div>
          <div className="font-mono text-xl font-semibold tracking-[0.16em] text-white">BYTEFORCE</div>
        </div>
      )}
    </motion.div>
  );
}
