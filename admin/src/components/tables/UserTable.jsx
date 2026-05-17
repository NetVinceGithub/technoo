import { Pencil, ShieldBan, Trash2, UserCheck, UserX } from "lucide-react";
import Badge from "../ui/Badge.jsx";
import Button from "../ui/Button.jsx";
import { formatCurrency } from "../../utils/helpers.js";

export default function UserTable({ users, onAction }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/8">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/8 text-left text-sm">
          <thead className="bg-white/[0.03] text-white/42">
            <tr>
              {["User", "Role", "Status", "Projects", "Revenue", "Actions"].map((head) => (
                <th key={head} className="px-4 py-3 font-medium">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/8">
            {users.map((user) => (
              <tr key={user.id} className="text-white/72">
                <td className="px-4 py-3">
                  <div className="font-medium text-white">{user.name}</div>
                  <div className="text-xs text-white/42">{user.email}</div>
                </td>
                <td className="px-4 py-3"><Badge>{user.role}</Badge></td>
                <td className="px-4 py-3"><Badge>{user.status}</Badge></td>
                <td className="px-4 py-3">{user.projects}</td>
                <td className="px-4 py-3">{formatCurrency(user.revenue)}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <Button onClick={() => onAction("edit", user)}><Pencil className="h-4 w-4" /></Button>
                    <Button onClick={() => onAction("ban", user)}><ShieldBan className="h-4 w-4" /></Button>
                    <Button onClick={() => onAction(user.status === "Active" ? "deactivate" : "activate", user)}>
                      {user.status === "Active" ? <UserX className="h-4 w-4" /> : <UserCheck className="h-4 w-4" />}
                    </Button>
                    <Button variant="danger" onClick={() => onAction("delete", user)}><Trash2 className="h-4 w-4" /></Button>
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
