import { motion } from "framer-motion";

export default function MetricCard({ label, value, helper, icon: Icon }) {
  return (
    <motion.div whileHover={{ y: -3 }} className="glass rounded-2xl p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/55">{label}</p>
          <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
          <p className="mt-2 text-xs text-white/45">{helper}</p>
        </div>
        <div className="rounded-xl bg-white/8 p-2.5 text-cyan">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </motion.div>
  );
}
