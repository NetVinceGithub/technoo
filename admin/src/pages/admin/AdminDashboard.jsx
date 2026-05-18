import { Activity, CircleDollarSign, Globe, PackageCheck, Rocket, TrendingUp, Users, Wifi } from "lucide-react";
import MetricCard from "../../components/cards/MetricCard.jsx";
import LineChart from "../../components/charts/LineChart.jsx";
import { revenueTrend } from "../../data/mockAnalytics.js";

export default function AdminDashboard() {
  const metrics = [
    ["Total Users", "4", "2 client accounts", Users],
    ["Total Websites", "2", "Client public site and admin portal", Globe],
    ["Website Packages", "2", "Starter site and admin portal", PackageCheck],
    ["Total Revenue", "$1,250", "$300 starting offer", CircleDollarSign],
    ["Monthly Revenue", "$1,250", "2 active invoices", TrendingUp],
    ["Pending Payments", "$950", "Admin portal balance", Activity],
    ["Active Deployments", "2", "Both websites live", Rocket],
    ["Online Users", "3", "Demo workspace active", Wifi],
  ];

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map(([label, value, helper, icon]) => <MetricCard key={label} label={label} value={value} helper={helper} icon={icon} />)}
      </section>
      <section className="grid gap-4 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="glass rounded-2xl p-4">
          <h2 className="font-semibold text-white">Revenue momentum</h2>
          <p className="mb-4 text-sm text-white/45">12 month overview</p>
          <LineChart data={revenueTrend} color="#7CF8C5" />
        </div>
        <div className="glass rounded-2xl p-4">
          <h2 className="font-semibold text-white">AI insights</h2>
          <div className="mt-4 space-y-3">
            {[
              "Client admin portal can add reports and role permissions as an upsell",
              "Public website traffic is strongest from USA and UK visitors",
              "$300 starter website package is converting into higher feature requests",
            ].map((item) => (
              <div key={item} className="rounded-xl bg-white/[0.04] p-3 text-sm text-white/68">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
