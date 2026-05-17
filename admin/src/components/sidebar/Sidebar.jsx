import { motion } from "framer-motion";
import { BarChart3, CreditCard, FolderKanban, Gauge, Rocket, Settings, Users, Wallet } from "lucide-react";
import Logo from "../assets/Logo.jsx";

const iconMap = {
  Dashboard: Gauge,
  Projects: FolderKanban,
  Analytics: BarChart3,
  Billing: CreditCard,
  Deployments: Rocket,
  Users,
  Revenue: Wallet,
  Settings,
};

export default function Sidebar({ tabs, activeTab, onChange, collapsed, onCollapse, mobile = false }) {
  return (
    <motion.aside animate={{ width: collapsed ? 88 : 260 }} className={`glass min-h-screen shrink-0 border-r border-white/8 p-4 ${mobile ? "block" : "hidden lg:block"}`}>
      <div className="flex items-center justify-between gap-3">
        <Logo compact={collapsed} />
        {!collapsed && (
          <button onClick={onCollapse} className="rounded-lg px-2 py-1 text-xs text-white/45 hover:bg-white/10 hover:text-white">
            ──
          </button>
        )}
      </div>
      {collapsed && (
        <button onClick={onCollapse} className="mt-1 w-full rounded-lg px-2 py-1 text-2xl text-white/45 hover:bg-white/10 hover:text-white">
          +
        </button>
      )}
      <nav className="mt-8 space-y-2">
        {tabs.map((tab) => {
          const Icon = iconMap[tab];
          const active = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => onChange(tab)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                active ? "bg-white text-ink" : "text-white/62 hover:bg-white/8 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed && tab}
            </button>
          );
        })}
      </nav>
    </motion.aside>
  );
}
