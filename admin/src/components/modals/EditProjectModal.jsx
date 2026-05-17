import { useEffect, useState } from "react";
import Button from "../ui/Button.jsx";
import Modal from "../ui/Modal.jsx";

export default function EditProjectModal({ project, onClose, onSave }) {
  const [form, setForm] = useState(project);

  useEffect(() => setForm(project), [project]);

  if (!form) return null;

  return (
    <Modal open={Boolean(project)} onClose={onClose} title="Edit project">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["name", "Website name"],
          ["link", "Website link"],
          ["deadline", "Deadline"],
          ["amount", "Amount to pay"],
        ].map(([key, label]) => (
          <label key={key} className="space-y-2 text-sm text-white/58">
            <span>{label}</span>
            <input
              value={form[key]}
              onChange={(event) => setForm({ ...form, [key]: key === "amount" ? Number(event.target.value) : event.target.value })}
              className="w-full rounded-xl bg-white/[0.05] px-3 py-2 text-white outline-none"
            />
          </label>
        ))}
        <label className="space-y-2 text-sm text-white/58">
          <span>Status</span>
          <select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })} className="w-full rounded-xl bg-white/[0.05] px-3 py-2 text-white outline-none">
            {["Active", "In Progress", "Review", "Blocked"].map((status) => <option key={status} className="bg-panel">{status}</option>)}
          </select>
        </label>
        <label className="space-y-2 text-sm text-white/58">
          <span>Deployment</span>
          <select value={form.deployment} onChange={(event) => setForm({ ...form, deployment: event.target.value })} className="w-full rounded-xl bg-white/[0.05] px-3 py-2 text-white outline-none">
            {["Draft", "Queued", "Staging", "Live"].map((status) => <option key={status} className="bg-panel">{status}</option>)}
          </select>
        </label>
      </div>
      <div className="mt-5 flex justify-end gap-2">
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={() => onSave(form)}>Save changes</Button>
      </div>
    </Modal>
  );
}
