import React from "react";

function StatsCard({ title, value, change, color, bg, icon }) {
  return (
    <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${bg} ${color}`}>{icon}</div>
        {change && (
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            {change}
          </span>
        )}
      </div>
      <div className="text-left">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
          {value}
        </h2>
        <p className="text-sm font-medium text-slate-400 mt-1">{title}</p>
      </div>
    </div>
  );
}

export default StatsCard;
