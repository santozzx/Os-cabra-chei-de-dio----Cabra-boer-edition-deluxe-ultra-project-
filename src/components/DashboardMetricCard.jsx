import React from 'react';

export default function DashboardMetricCard({ label, value, unit, note, icon: Icon, color, bg }) {
  return (
    <div className="boer-card p-5">
      <div className="flex items-start justify-between">
        <span className="farm-kicker">{label}</span>
        <span className={`rounded-xl p-2.5 ${bg} ${color}`}>
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className={`mt-4 text-3xl font-extrabold ${color}`}>
        {value} {unit && <small className="text-xs font-bold">{unit}</small>}
      </div>
      <p className="mt-2 text-xs text-boer-muted">{note}</p>
    </div>
  );
}
