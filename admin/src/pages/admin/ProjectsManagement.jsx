import { useMemo, useState } from "react";
import SearchFilterBar from "../../components/forms/SearchFilterBar.jsx";
import ProjectTable from "../../components/tables/ProjectTable.jsx";

const developers = ["A. Rivera", "J. Chen", "S. Patel", "K. Brooks"];

export default function ProjectsManagement({ projects, hiddenIds, onAction }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [assignments, setAssignments] = useState({});

  const filtered = useMemo(
    () =>
      projects.filter((project) => {
        const visible = !hiddenIds.includes(project.id);
        const matchesSearch = project.name.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || project.status === filter || project.deployment === filter;
        return visible && matchesSearch && matchesFilter;
      }),
    [projects, hiddenIds, search, filter],
  );

  return (
    <div className="space-y-4">
      <SearchFilterBar search={search} onSearch={setSearch} filter={filter} onFilter={setFilter} options={["All", "Active", "In Progress", "Review", "Blocked", "Live", "Staging"]} />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {filtered.slice(0, 4).map((project) => (
          <label key={project.id} className="glass rounded-2xl p-4 text-sm text-white/62">
            <span className="block text-white">{project.name}</span>
            <select
              value={assignments[project.id] || ""}
              onChange={(event) => setAssignments({ ...assignments, [project.id]: event.target.value })}
              className="mt-3 w-full rounded-xl bg-white/[0.05] px-3 py-2 text-white outline-none"
            >
              <option value="" className="bg-panel">Assign developer</option>
              {developers.map((developer) => <option key={developer} className="bg-panel">{developer}</option>)}
            </select>
          </label>
        ))}
      </div>
      <ProjectTable projects={filtered} onAction={onAction} />
    </div>
  );
}
