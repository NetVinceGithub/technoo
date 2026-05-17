import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./Sidebar.jsx";

export default function MobileSidebar({ open, onClose, ...props }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-black/55 lg:hidden">
          <motion.div initial={{ x: -260 }} animate={{ x: 0 }} exit={{ x: -260 }} className="w-[260px]">
            <Sidebar {...props} collapsed={false} onCollapse={onClose} mobile />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
