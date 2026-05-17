import BarChart from "../../components/charts/BarChart.jsx";
import DonutChart from "../../components/charts/DonutChart.jsx";
import LineChart from "../../components/charts/LineChart.jsx";
import { adminCountries, deviceSplit, userGrowth } from "../../data/mockAnalytics.js";

export default function Analytics() {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <div className="glass rounded-2xl p-4">
        <h2 className="font-semibold text-white">User growth</h2>
        <p className="mb-4 text-sm text-white/45">Account creation trend</p>
        <LineChart data={userGrowth} />
      </div>
      <div className="glass rounded-2xl p-4">
        <h2 className="font-semibold text-white">Device analytics</h2>
        <div className="mt-4">
          <DonutChart items={deviceSplit} />
        </div>
      </div>
      <div className="glass rounded-2xl p-4 xl:col-span-2">
        <h2 className="font-semibold text-white">Geographic analytics</h2>
        <p className="mb-4 text-sm text-white/45">Client distribution across overseas markets</p>
        <div className="mt-4">
          <BarChart items={adminCountries} />
        </div>
      </div>
    </div>
  );
}
