import { AnimatePresence, motion } from "framer-motion";

export default function Toast({ message }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          className="fixed bottom-5 right-5 z-50 rounded-xl border border-white/10 bg-panel px-4 py-3 text-sm text-white shadow-glow"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
