import { useState } from "react";
const tabs = {
  Dashboard: {
    stats: [
      { label: "Tasks automated", value: "1,284", delta: "+34% this week" },
      { label: "Hours saved", value: "312h", delta: "+18% this month" },
    ],
    panelTitle: "Workflow performance",
    bars: [42, 67, 54, 82, 63, 92, 74],
    tagsTitle: "Active workflows",
    tags: ["Email Triage", "CRM Sync", "Report Gen", "Lead Scoring", "Meeting Notes"],
  },
  "AI Workflows": {
    stats: [
      { label: "Active agents", value: "24", delta: "6 learning now" },
      { label: "Success rate", value: "97.8%", delta: "+2.1% this month" },
    ],
    panelTitle: "Automation load",
    bars: [28, 46, 72, 58, 86, 64, 77],
    tagsTitle: "Running agents",
    tags: ["Invoice Parser", "Lead Router", "Meeting Summary", "Support Triage"],
  },
  Analytics: {
    stats: [
      { label: "Signals tracked", value: "18.4k", delta: "+11% today" },
      { label: "Insights found", value: "146", delta: "32 high priority" },
    ],
    panelTitle: "Insight velocity",
    bars: [35, 61, 48, 76, 88, 52, 69],
    tagsTitle: "Top segments",
    tags: ["Revenue", "Retention", "Pipeline", "Support"],
  },
  Integrations: {
    stats: [
      { label: "Connected apps", value: "37", delta: "4 added this week" },
      { label: "Sync health", value: "99.9%", delta: "All systems normal" },
    ],
    panelTitle: "Sync activity",
    bars: [72, 44, 81, 66, 53, 90, 62],
    tagsTitle: "Popular connections",
    tags: ["Slack", "Notion", "Salesforce", "GitHub", "Gmail"],
  },
  Team: {
    stats: [
      { label: "Members online", value: "18", delta: "Across 4 squads" },
      { label: "Reviews done", value: "92", delta: "+14 this week" },
    ],
    panelTitle: "Team throughput",
    bars: [51, 39, 68, 84, 57, 73, 91],
    tagsTitle: "Active squads",
    tags: ["Operations", "Revenue", "Product", "Customer Success"],
  },
};

export default function ProductPreview() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const activeContent = tabs[activeTab];

  return (
    <div className="preview-shell reveal">
      <div className="preview-window">
        <div className="preview-topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="preview-layout">
          <aside className="preview-sidebar">
            {Object.keys(tabs).map((item) => (
              <button
                key={item}
                type="button"
                className={item === activeTab ? "active" : ""}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </button>
            ))}
          </aside>
          <div className="preview-main">
            <div className="preview-stats">
              {activeContent.stats.map((stat) => (
                <article key={stat.label}>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                  <em>{stat.delta}</em>
                </article>
              ))}
            </div>
            <article className="preview-panel">
              <span>{activeContent.panelTitle}</span>
              <div className="mini-chart">
                {activeContent.bars.map((value, index) => (
                  <i key={`${activeTab}-${index}`} style={{ height: `${value}%` }} />
                ))}
              </div>
            </article>
            <article className="preview-panel">
              <span>{activeContent.tagsTitle}</span>
              <div className="preview-tags">
                {activeContent.tags.map((item) => <b key={item}>{item}</b>)}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
