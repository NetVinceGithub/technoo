import Badge from "../../components/ui/Badge.jsx";

export default function Deployment({ projects }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {projects.map((project) => (
        <div key={project.id} className="glass rounded-2xl p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-semibold text-white">{project.name}</h2>
              <p className="text-sm text-white/45">{project.link}</p>
            </div>
            <Badge>{project.deployment}</Badge>
          </div>
          <div className="mt-4 h-2 rounded-full bg-white/8">
            <div className="h-full rounded-full bg-gradient-to-r from-cyan to-mint" style={{ width: `${project.progress}%` }} />
          </div>
          <p className="mt-2 text-sm text-white/52">{project.progress}% complete</p>
        </div>
      ))}
    </div>
  );
}
