import { motion } from "framer-motion";

export default function LineChart({ data, color = "#68E7FF" }) {
  const max = Math.max(...data);
  const points = data
    .map((value, index) => `${(index / (data.length - 1)) * 100},${100 - (value / max) * 92}`)
    .join(" ");

  return (
    <div className="h-56 rounded-2xl bg-white/[0.03] p-4">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full overflow-visible">
        <polyline fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" points="0,20 100,20" />
        <polyline fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" points="0,50 100,50" />
        <polyline fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" points="0,80 100,80" />
        <motion.polyline
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
      </svg>
    </div>
  );
}
