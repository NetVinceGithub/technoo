import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";

export default function CommandPalette({ open, tabs, onClose, onSelect }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/55 p-4">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass mx-auto mt-16 max-w-xl rounded-2xl p-3"
          >
            <div className="flex items-center gap-2 rounded-xl bg-white/[0.04] px-3 py-2 text-white/55">
              <Search className="h-4 w-4" />
              Jump to a workspace
            </div>
            <div className="mt-3 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    onSelect(tab);
                    onClose();
                  }}
                  className="w-full rounded-xl px-3 py-3 text-left text-sm text-white/72 hover:bg-white/8 hover:text-white"
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
