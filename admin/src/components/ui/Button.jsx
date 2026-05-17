import { motion } from "framer-motion";

const variants = {
  primary: "bg-white text-ink hover:bg-cyan",
  subtle: "bg-white/8 text-white hover:bg-white/14",
  danger: "bg-coral/15 text-coral hover:bg-coral/25",
};

export default function Button({ children, variant = "subtle", className = "", ...props }) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
