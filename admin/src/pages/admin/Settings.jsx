export default function AdminSettings() {
  return (
    <div className="glass rounded-2xl p-4">
      <h2 className="font-semibold text-white">System settings</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {["Live monitoring", "Escalation alerts", "Weekly digest", "Deployment approvals"].map((item) => (
          <label key={item} className="flex items-center justify-between rounded-xl bg-white/[0.04] p-3 text-sm text-white/68">
            {item}
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-cyan" />
          </label>
        ))}
      </div>
    </div>
  );
}
