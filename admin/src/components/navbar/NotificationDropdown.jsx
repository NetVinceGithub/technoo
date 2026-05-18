import { AnimatePresence, motion } from "framer-motion";

const notifications = [
  "Admin Portal balance due on Jun 04",
  "Website starter package marked paid",
  "Traffic increased on client public website this week",
];

export default function NotificationDropdown({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          className="glass absolute right-0 top-14 w-80 rounded-2xl p-3"
        >
          <p className="px-2 pb-2 text-sm font-medium text-white">Notifications</p>
          <div className="space-y-2">
            {notifications.map((item) => (
              <div key={item} className="rounded-xl bg-white/[0.04] p-3 text-sm text-white/68">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
