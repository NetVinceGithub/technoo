import { useState } from "react";
import { adminTabs } from "../utils/constants.js";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import MobileSidebar from "../components/sidebar/MobileSidebar.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import CommandPalette from "../components/navbar/CommandPalette.jsx";

export default function AdminLayout({ activeTab, onChange, onLogout, children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar tabs={adminTabs} activeTab={activeTab} onChange={onChange} collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} />
      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} tabs={adminTabs} activeTab={activeTab} onChange={onChange} />
      <div className="min-w-0 flex-1">
        <Navbar role="Admin" activeTab={activeTab} onOpenPalette={() => setPaletteOpen(true)} onOpenMobile={() => setMobileOpen(true)} notificationsOpen={notificationsOpen} setNotificationsOpen={setNotificationsOpen} onLogout={onLogout} />
        <main className="p-4 md:p-6">{children}</main>
      </div>
      <CommandPalette open={paletteOpen} tabs={adminTabs} onClose={() => setPaletteOpen(false)} onSelect={onChange} />
    </div>
  );
}
