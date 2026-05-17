import { useMemo, useState } from "react";
import SearchFilterBar from "../../components/forms/SearchFilterBar.jsx";
import UserTable from "../../components/tables/UserTable.jsx";
import { useDebouncedValue } from "../../hooks/useDebouncedValue.js";

export default function UsersManagement({ users, onAction }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const debouncedSearch = useDebouncedValue(search);
  const filtered = useMemo(
    () =>
      users.filter((user) => {
        const matchesSearch = `${user.name} ${user.email}`.toLowerCase().includes(debouncedSearch.toLowerCase());
        const matchesFilter = filter === "All" || user.status === filter || user.role === filter;
        return matchesSearch && matchesFilter;
      }),
    [users, debouncedSearch, filter],
  );

  return (
    <div className="space-y-4">
      <SearchFilterBar search={search} onSearch={setSearch} filter={filter} onFilter={setFilter} options={["All", "Active", "Inactive", "Pending", "Admin", "Client"]} />
      <UserTable users={filtered} onAction={onAction} />
    </div>
  );
}
