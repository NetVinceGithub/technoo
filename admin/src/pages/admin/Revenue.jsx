import { Download } from "lucide-react";
import Button from "../../components/ui/Button.jsx";
import LineChart from "../../components/charts/LineChart.jsx";
import { revenueTrend } from "../../data/mockAnalytics.js";

export default function Revenue() {
  return (
    <div className="space-y-4">
      <div className="flex justify-end gap-2">
        <Button><Download className="h-4 w-4" /> Export CSV</Button>
        <Button><Download className="h-4 w-4" /> Export PDF</Button>
      </div>
      <div className="glass rounded-2xl p-4">
        <h2 className="font-semibold text-white">Revenue tracking</h2>
        <p className="mb-4 text-sm text-white/45">Monthly recurring performance</p>
        <LineChart data={revenueTrend} color="#FFCF70" />
      </div>
    </div>
  );
}
