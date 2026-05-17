const tones = {
  Active: "bg-mint/15 text-mint",
  Live: "bg-mint/15 text-mint",
  Review: "bg-cyan/15 text-cyan",
  Staging: "bg-cyan/15 text-cyan",
  Queued: "bg-amber/15 text-amber",
  Pending: "bg-amber/15 text-amber",
  "In Progress": "bg-cyan/15 text-cyan",
  Draft: "bg-white/10 text-white/70",
  Blocked: "bg-coral/15 text-coral",
  Inactive: "bg-white/10 text-white/55",
  Admin: "bg-cyan/15 text-cyan",
  Client: "bg-white/10 text-white/70",
};

export default function Badge({ children }) {
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${tones[children] || "bg-white/10 text-white/70"}`}>{children}</span>;
}
