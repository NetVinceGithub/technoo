import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Github, LoaderCircle } from "lucide-react";
import Button from "../../components/ui/Button.jsx";

export default function Login({ onLogin }) {
  const [role, setRole] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const valid = useMemo(() => email.includes("@") && password.length >= 6, [email, password]);
  const credentials = {
    Admin: {
      email: "admin@gmail.com",
      password: "admin123",
    },
    Client: {
      email: "client@gmail.com",
      password: "client123",
    },
  };

  useEffect(() => {
    const normalizedEmail = email.trim().toLowerCase();
    if (normalizedEmail === credentials.Admin.email) setRole("Admin");
    if (normalizedEmail === credentials.Client.email) setRole("Client");
  }, [email]);

  const submit = (event) => {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();
    if (!valid) {
      setError("Use a valid email and a password with at least 6 characters.");
      return;
    }
    if (normalizedEmail !== credentials[role].email || normalizedPassword !== credentials[role].password) {
      setError(`Incorrect ${role.toLowerCase()} credentials.`);
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin(role);
    }, 900);
  };

  return (
    <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-5 shadow-glow md:p-7">
      <div className="mb-5 grid grid-cols-2 rounded-2xl bg-white/[0.05] p-1">
        {["Admin", "Client"].map((item) => (
          <button
            key={item}
            onClick={() => setRole(item)}
            className={`rounded-xl px-4 py-3 text-sm font-medium transition ${role === item ? "bg-white text-ink" : "text-white/55"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <h2 className="text-2xl font-semibold text-white">Welcome back</h2>
      <p className="mt-2 text-sm text-white/52">Choose a role and enter its assigned demo credentials to continue.</p>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <label className="block space-y-2 text-sm text-white/58">
          <span>Email</span>
          <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="team@zylo.dev" className="w-full rounded-xl bg-white/[0.05] px-3 py-3 text-white outline-none" />
        </label>
        <label className="block space-y-2 text-sm text-white/58">
          <span>Password</span>
          <div className="flex items-center rounded-xl bg-white/[0.05] pr-2">
            <input
              value={password}
              type={showPassword ? "text" : "password"}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              className="w-full bg-transparent px-3 py-3 text-white outline-none"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="p-2 text-white/45">
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </label>
        <label className="flex items-center gap-2 text-sm text-white/55">
          <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} className="h-4 w-4 accent-cyan" />
          Remember me
        </label>
        {error && <p className="rounded-xl bg-coral/10 px-3 py-2 text-sm text-coral">{error}</p>}
        <Button variant="primary" className="w-full py-3" disabled={loading}>
          {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Enter workspace"}
        </Button>
      </form>
      <div className="mt-5 grid grid-cols-2 gap-2">
        <Button><Github className="h-4 w-4" /> GitHub</Button>
        <Button>Google</Button>
      </div>
    </motion.section>
  );
}
