import { Bell, Menu, Search } from "lucide-react";
import NotificationDropdown from "./NotificationDropdown.jsx";
import ProfileMenu from "./ProfileMenu.jsx";

export default function Navbar({ role, activeTab, onOpenPalette, onOpenMobile, notificationsOpen, setNotificationsOpen, onLogout }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-white/8 bg-ink/75 px-4 py-4 backdrop-blur-xl md:px-6">
      <div className="flex items-center gap-3">
        <button onClick={onOpenMobile} className="rounded-lg bg-white/8 p-2 text-white lg:hidden">
          <Menu className="h-4 w-4" />
        </button>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-white/35">{role}</p>
          <h1 className="text-lg font-semibold text-white">{activeTab}</h1>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={onOpenPalette} className="hidden items-center gap-2 rounded-xl bg-white/8 px-3 py-2 text-sm text-white/58 transition hover:bg-white/12 hover:text-white sm:flex">
          <Search className="h-4 w-4" />
          Search
        </button>
        <div className="relative">
          <button onClick={() => setNotificationsOpen(!notificationsOpen)} className="rounded-xl bg-white/8 p-2.5 text-white/70 transition hover:bg-white/12 hover:text-white">
            <Bell className="h-4 w-4" />
          </button>
          <NotificationDropdown open={notificationsOpen} />
        </div>
        <ProfileMenu onLogout={onLogout} />
      </div>
    </header>
  );
}
