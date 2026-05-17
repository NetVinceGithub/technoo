import { motion } from "framer-motion";

export default function BarChart({ items }) {
  return (
    <div className="flex h-56 items-end gap-3 rounded-2xl bg-white/[0.03] p-4">
      {items.map((item, index) => (
        <div key={item.label} className="flex flex-1 flex-col items-center gap-3">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${item.value}%` }}
            transition={{ delay: index * 0.08 }}
            className="w-full rounded-t-xl bg-gradient-to-t from-cyan/35 via-cyan to-mint"
          />
          <span className="text-xs text-white/45">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
