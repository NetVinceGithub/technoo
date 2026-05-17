export default function DonutChart({ items }) {
  let cursor = 0;
  const colors = ["#68E7FF", "#7CF8C5", "#FFCF70"];

  return (
    <div className="grid gap-4 sm:grid-cols-[160px_1fr] sm:items-center">
      <div
        className="mx-auto h-36 w-36 rounded-full"
        style={{
          background: `conic-gradient(${items
            .map((item, index) => {
              const start = cursor;
              cursor += item.value;
              return `${colors[index]} ${start}% ${cursor}%`;
            })
            .join(", ")})`,
        }}
      >
        <div className="m-5 h-[6.5rem] w-[6.5rem] rounded-full bg-panel" />
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={item.label} className="flex items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2 text-white/65">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: colors[index] }} />
              {item.label}
            </div>
            <span className="font-medium text-white">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
