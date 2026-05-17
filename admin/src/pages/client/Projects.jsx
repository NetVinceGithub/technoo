import { useMemo, useState } from "react";
import SearchFilterBar from "../../components/forms/SearchFilterBar.jsx";
import ProjectTable from "../../components/tables/ProjectTable.jsx";
import Button from "../../components/ui/Button.jsx";
import { useDebouncedValue } from "../../hooks/useDebouncedValue.js";
import { sortBy } from "../../utils/helpers.js";

export default function Projects({ projects, hiddenIds, onAction }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortDirection, setSortDirection] = useState("asc");
  const [showHidden, setShowHidden] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 4;
  const debouncedSearch = useDebouncedValue(search);

  const visible = useMemo(() => {
    const base = projects.filter((project) => showHidden || !hiddenIds.includes(project.id));
    const searched = base.filter((project) => project.name.toLowerCase().includes(debouncedSearch.toLowerCase()));
    const filtered = filter === "All" ? searched : searched.filter((project) => project.status === filter || project.deployment === filter);
    return sortBy(filtered, "deadline", sortDirection);
  }, [projects, hiddenIds, showHidden, debouncedSearch, filter, sortDirection]);

  const paged = visible.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.max(1, Math.ceil(visible.length / pageSize));

  return (
    <div className="space-y-4">
      <SearchFilterBar
        search={search}
        onSearch={setSearch}
        filter={filter}
        onFilter={setFilter}
        options={["All", "Active", "In Progress", "Review", "Blocked", "Live", "Staging"]}
        extra={
          <>
            <Button onClick={() => setShowHidden(!showHidden)}>{showHidden ? "Hide hidden" : "Show hidden projects"}</Button>
            <Button onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")}>Sort deadline</Button>
          </>
        }
      />
      {paged.length ? (
        <>
          <ProjectTable projects={paged} onAction={onAction} />
          <div className="flex items-center justify-between text-sm text-white/52">
            <span>Page {page} of {totalPages}</span>
            <div className="flex gap-2">
              <Button onClick={() => setPage((current) => Math.max(1, current - 1))}>Previous</Button>
              <Button onClick={() => setPage((current) => Math.min(totalPages, current + 1))}>Next</Button>
            </div>
          </div>
        </>
      ) : (
        <div className="glass rounded-2xl p-8 text-center text-white/58">No projects match the current filters.</div>
      )}
    </div>
  );
}
