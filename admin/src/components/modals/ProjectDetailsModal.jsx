import LineChart from "../charts/LineChart.jsx";
import Modal from "../ui/Modal.jsx";
import Badge from "../ui/Badge.jsx";
import { clientTraffic } from "../../data/mockAnalytics.js";

export default function ProjectDetailsModal({ project, onClose }) {
  return (
    <Modal open={Boolean(project)} onClose={onClose} title={project?.name || "Project details"}>
      {project && (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/[0.04] p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-white/48">Website preview</span>
              <Badge>{project.deployment}</Badge>
            </div>
            <div className="soft-grid flex h-36 items-center justify-center rounded-xl border border-white/8 text-sm text-white/48">
              {project.link}
            </div>
          </div>
          <div className="rounded-2xl bg-white/[0.04] p-4">
            <p className="text-sm text-white/48">Deployment information</p>
            <div className="mt-3 space-y-3 text-sm text-white/72">
              <div className="flex justify-between"><span>Owner</span><span>{project.owner}</span></div>
              <div className="flex justify-between"><span>Market</span><span>{project.country}</span></div>
              <div className="flex justify-between"><span>Status</span><Badge>{project.status}</Badge></div>
              <div className="flex justify-between"><span>Progress</span><span>{project.progress}%</span></div>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="mb-3 text-sm text-white/48">Traffic analytics</p>
            <LineChart data={clientTraffic} />
          </div>
        </div>
      )}
    </Modal>
  );
}
