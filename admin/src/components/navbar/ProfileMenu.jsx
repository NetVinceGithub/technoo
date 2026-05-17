import { useState } from "react";
import { ChevronDown, LogOut, UserRound } from "lucide-react";

export default function ProfileMenu({ onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 rounded-xl bg-white/8 px-3 py-2 text-sm text-white">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-mint text-xs font-bold text-ink">ZY</span>
        <ChevronDown className="h-4 w-4 text-white/45" />
      </button>
      {open && (
        <div className="glass absolute right-0 top-14 w-48 rounded-2xl p-2">
          <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/72 hover:bg-white/8 hover:text-white">
            <UserRound className="h-4 w-4" />
            Profile
          </button>
          <button onClick={onLogout} className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-coral hover:bg-coral/10">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
