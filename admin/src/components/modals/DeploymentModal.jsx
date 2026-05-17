import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Modal from "../ui/Modal.jsx";

const logs = [
  "Provisioning build container",
  "Installing dependencies",
  "Running production build",
  "Uploading assets",
  "Switching traffic to new release",
];

export default function DeploymentModal({ project, onClose, onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState([]);

  useEffect(() => {
    if (!project) return undefined;
    setProgress(0);
    setVisibleLogs([]);
    const timer = setInterval(() => {
      setProgress((current) => Math.min(current + 20, 100));
    }, 420);
    return () => clearInterval(timer);
  }, [project]);

  useEffect(() => {
    if (!project) return undefined;
    const nextCount = Math.min(Math.ceil(progress / 20), logs.length);
    setVisibleLogs(logs.slice(0, nextCount));
    if (progress === 100) {
      const timeout = setTimeout(onComplete, 600);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [progress, project, onComplete]);

  return (
    <Modal open={Boolean(project)} onClose={onClose} title={`Deploy ${project?.name || ""}`}>
      <div className="space-y-4">
        <div className="h-3 overflow-hidden rounded-full bg-white/8">
          <div className="h-full rounded-full bg-gradient-to-r from-cyan via-mint to-amber transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        <div className="rounded-2xl bg-black/20 p-4 font-mono text-sm text-white/68">
          {visibleLogs.map((log) => <div key={log}>$ {log}</div>)}
        </div>
        {progress === 100 && (
          <div className="flex items-center gap-2 rounded-xl bg-mint/10 p-3 text-sm text-mint">
            <CheckCircle2 className="h-4 w-4" />
            Deployment succeeded. Release is live.
          </div>
        )}
      </div>
    </Modal>
  );
}
