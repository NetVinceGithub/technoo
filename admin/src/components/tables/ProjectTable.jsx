import { Eye, EyeOff, Pencil, Rocket, ShieldBan, Trash2 } from "lucide-react";
import Badge from "../ui/Badge.jsx";
import Button from "../ui/Button.jsx";
import { formatCurrency, formatNumber } from "../../utils/helpers.js";

export default function ProjectTable({ projects, onAction }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/8">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/8 text-left text-sm">
          <thead className="bg-white/[0.03] text-white/42">
            <tr>
              {["Website", "Link", "Visits", "Deadline", "Amount", "Status", "Deployment", "Created", "Actions"].map((head) => (
                <th key={head} className="px-4 py-3 font-medium">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/8">
            {projects.map((project) => (
              <tr key={project.id} className={project.status === "Blocked" ? "bg-coral/[0.04] text-white/45" : "text-white/72"}>
                <td className="px-4 py-3 font-medium text-white">{project.name}</td>
                <td className="px-4 py-3">{project.link}</td>
                <td className="px-4 py-3">{formatNumber(project.visits)}</td>
                <td className="px-4 py-3">{project.deadline}</td>
                <td className="px-4 py-3">{formatCurrency(project.amount)}</td>
                <td className="px-4 py-3"><Badge>{project.status}</Badge></td>
                <td className="px-4 py-3"><Badge>{project.deployment}</Badge></td>
                <td className="px-4 py-3">{project.createdAt}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <Button onClick={() => onAction("view", project)}><Eye className="h-4 w-4" /></Button>
                    <Button onClick={() => onAction("edit", project)}><Pencil className="h-4 w-4" /></Button>
                    <Button onClick={() => onAction("hide", project)}><EyeOff className="h-4 w-4" /></Button>
                    <Button onClick={() => onAction("block", project)}><ShieldBan className="h-4 w-4" /></Button>
                    <Button onClick={() => onAction("deploy", project)}><Rocket className="h-4 w-4" /></Button>
                    <Button variant="danger" onClick={() => onAction("delete", project)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
