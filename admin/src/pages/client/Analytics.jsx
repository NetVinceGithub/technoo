import BarChart from "../../components/charts/BarChart.jsx";
import LineChart from "../../components/charts/LineChart.jsx";
import { clientTraffic, revenueTrend } from "../../data/mockAnalytics.js";

export default function ClientAnalytics() {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <div className="glass rounded-2xl p-4">
        <h2 className="font-semibold text-white">Traffic graph</h2>
        <p className="mb-4 text-sm text-white/45">Visitor activity</p>
        <LineChart data={clientTraffic} />
      </div>
      <div className="glass rounded-2xl p-4">
        <h2 className="font-semibold text-white">Revenue visualization</h2>
        <p className="mb-4 text-sm text-white/45">Invoice collection trend</p>
        <BarChart items={revenueTrend.slice(-6).map((value, index) => ({ label: `M${index + 1}`, value }))} />
      </div>
    </div>
  );
}
