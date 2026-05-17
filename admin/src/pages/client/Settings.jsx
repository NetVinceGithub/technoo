import Button from "../../components/ui/Button.jsx";

export default function ClientSettings() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
      <div className="glass rounded-2xl p-4">
        <h2 className="font-semibold text-white">Profile</h2>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-mint font-semibold text-ink">CL</div>
          <Button>Upload avatar</Button>
        </div>
      </div>
      <div className="glass rounded-2xl p-4">
        <h2 className="font-semibold text-white">Preferences</h2>
        <div className="mt-4 space-y-3">
          {["Email notifications", "Weekly summaries", "Deployment alerts"].map((item) => (
            <label key={item} className="flex items-center justify-between rounded-xl bg-white/[0.04] p-3 text-sm text-white/68">
              {item}
              <input type="checkbox" defaultChecked className="h-4 w-4 accent-cyan" />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
