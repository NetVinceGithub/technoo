import { Activity, CircleDollarSign, Globe, Rocket, Smartphone, TrendingUp, Users, Wifi } from "lucide-react";
import MetricCard from "../../components/cards/MetricCard.jsx";
import LineChart from "../../components/charts/LineChart.jsx";
import { revenueTrend } from "../../data/mockAnalytics.js";

export default function AdminDashboard() {
  const metrics = [
    ["Total Users", "356", "+28 this month", Users],
    ["Total Websites", "128", "14 launching soon", Globe],
    ["Total Mobile Apps", "42", "6 in QA", Smartphone],
    ["Total Revenue", "$418k", "+18% YTD", CircleDollarSign],
    ["Monthly Revenue", "$53k", "Best month yet", TrendingUp],
    ["Pending Payments", "$19k", "11 invoices", Activity],
    ["Active Deployments", "12", "4 shipping now", Rocket],
    ["Online Users", "87", "Live now", Wifi],
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
              "Upsell opportunity detected in finance accounts",
              "APAC traffic growing 22% faster than forecast",
              "3 deployments likely to miss SLA without review",
            ].map((item) => (
              <div key={item} className="rounded-xl bg-white/[0.04] p-3 text-sm text-white/68">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
