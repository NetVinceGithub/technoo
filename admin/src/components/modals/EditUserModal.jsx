import { useEffect, useState } from "react";
import Button from "../ui/Button.jsx";
import Modal from "../ui/Modal.jsx";

export default function EditUserModal({ user, onClose, onSave }) {
  const [form, setForm] = useState(user);

  useEffect(() => setForm(user), [user]);
  if (!form) return null;

  return (
    <Modal open={Boolean(user)} onClose={onClose} title="Edit user">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["name", "Name"],
          ["email", "Email"],
        ].map(([key, label]) => (
          <label key={key} className="space-y-2 text-sm text-white/58">
            <span>{label}</span>
            <input value={form[key]} onChange={(event) => setForm({ ...form, [key]: event.target.value })} className="w-full rounded-xl bg-white/[0.05] px-3 py-2 text-white outline-none" />
          </label>
        ))}
        <label className="space-y-2 text-sm text-white/58">
          <span>Role</span>
          <select value={form.role} onChange={(event) => setForm({ ...form, role: event.target.value })} className="w-full rounded-xl bg-white/[0.05] px-3 py-2 text-white outline-none">
            {["Admin", "Client"].map((role) => <option key={role} className="bg-panel">{role}</option>)}
          </select>
        </label>
        <label className="space-y-2 text-sm text-white/58">
          <span>Status</span>
          <select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })} className="w-full rounded-xl bg-white/[0.05] px-3 py-2 text-white outline-none">
            {["Active", "Inactive", "Pending", "Banned"].map((status) => <option key={status} className="bg-panel">{status}</option>)}
          </select>
        </label>
      </div>
      <div className="mt-5 flex justify-end gap-2">
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={() => onSave(form)}>Save user</Button>
      </div>
    </Modal>
  );
}
