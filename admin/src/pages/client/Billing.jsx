import { CreditCard, ReceiptText, Wallet } from "lucide-react";
import MetricCard from "../../components/cards/MetricCard.jsx";
import { formatCurrency } from "../../utils/helpers.js";

export default function Billing({ projects }) {
  const outstanding = projects.reduce((sum, project) => sum + project.amount, 0);
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Outstanding" value={formatCurrency(outstanding)} helper="Across current invoices" icon={Wallet} />
        <MetricCard label="Paid this month" value="$12,400" helper="4 settled invoices" icon={ReceiptText} />
        <MetricCard label="Next charge" value="May 24" helper="Autopay enabled" icon={CreditCard} />
      </div>
      <div className="glass rounded-2xl p-4">
        <h2 className="font-semibold text-white">Billing timeline</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {["May 24 · Helix Finance", "May 29 · Northstar Studio", "Jun 04 · Aurora Commerce"].map((item) => (
            <div key={item} className="rounded-xl bg-white/[0.04] p-4 text-sm text-white/68">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
