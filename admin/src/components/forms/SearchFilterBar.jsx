import { Search } from "lucide-react";

export default function SearchFilterBar({ search, onSearch, filter, onFilter, options, extra }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <label className="flex min-w-0 flex-1 items-center gap-2 rounded-xl bg-white/[0.05] px-3 py-2 text-white/55">
        <Search className="h-4 w-4" />
        <input
          value={search}
          onChange={(event) => onSearch(event.target.value)}
          placeholder="Search"
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
        />
      </label>
      <div className="flex flex-wrap items-center gap-2">
        <select value={filter} onChange={(event) => onFilter(event.target.value)} className="rounded-xl bg-white/[0.05] px-3 py-2 text-sm text-white outline-none">
          {options.map((option) => (
            <option key={option} value={option} className="bg-panel">
              {option}
            </option>
          ))}
        </select>
        {extra}
      </div>
    </div>
  );
}
