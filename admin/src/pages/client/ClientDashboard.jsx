import { CalendarClock, CircleDollarSign, FolderKanban, Globe, Rocket, TrendingUp } from "lucide-react";
import MetricCard from "../../components/cards/MetricCard.jsx";
import LineChart from "../../components/charts/LineChart.jsx";
import { clientTraffic } from "../../data/mockAnalytics.js";
import { formatCurrency, formatNumber } from "../../utils/helpers.js";

export default function ClientDashboard({ projects }) {
  const visits = projects.reduce((sum, project) => sum + project.visits, 0);
  const balance = projects.reduce((sum, project) => sum + project.amount, 0);
  const liveCount = projects.filter((project) => project.deployment === "Live").length;

  const metrics = [
    ["Total Websites", projects.length, "Across active retainers", Globe],
    ["Total Visits", formatNumber(visits), "+12.4% this month", TrendingUp],
    ["Active Projects", projects.filter((project) => project.status !== "Blocked").length, "Both websites live", FolderKanban],
    ["Upcoming Deadlines", 1, "Admin portal balance due", CalendarClock],
    ["Remaining Balance", formatCurrency(balance), "$300 starter + feature work", CircleDollarSign],
    ["Deployment Status", `${liveCount} Live`, "All systems monitored", Rocket],
  ];

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {metrics.map(([label, value, helper, icon]) => <MetricCard key={label} label={label} value={value} helper={helper} icon={icon} />)}
      </section>
      <section className="grid gap-4 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="glass rounded-2xl p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-white">Traffic performance</h2>
              <p className="text-sm text-white/45">Rolling 12 month view</p>
            </div>
            <span className="rounded-full bg-mint/10 px-3 py-1 text-sm text-mint">+18.2%</span>
          </div>
          <LineChart data={clientTraffic} />
        </div>
        <div className="glass rounded-2xl p-4">
          <h2 className="font-semibold text-white">Activity feed</h2>
          <div className="mt-4 space-y-3">
            {[
              "Client website starter package marked live",
              "Admin portal deployment verified",
              "$950 admin portal balance scheduled",
              "Optional analytics support add-on prepared",
            ].map((item) => (
              <div key={item} className="rounded-xl bg-white/[0.04] p-3 text-sm text-white/68">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
