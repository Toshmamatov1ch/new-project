import React from "react";
import statsData from "../data/DashboardCard.js";

function DashboardStats() {
  return (
    <div className="flex gap-6  flex-wrap justify-center sm:justify-start ">
      {statsData.map((stat) => {
        const IconComponent = stat.icon;

        return (
          <div
            key={stat.id}
            className="stat-card border border-slate-100 rounded-2xl p-6 min-w-60 flex-1 bg-white shadow-sm flex flex-col justify-between"
          >
            {/* Yuqori qism (Ikonka va Foiz) */}
            <div className="flex items-center justify-between w-full">
              <div
                className={`icon-wrapper p-3 rounded-xl flex items-center justify-center ${stat.bgColor}`}
              >
                {IconComponent && (
                  <IconComponent
                    size={20}
                    className={stat.iconColor} // Dinamik rang (Masalan: text-indigo-600)
                  />
                )}
              </div>
              <span className="text-emerald-500 font-semibold text-sm bg-emerald-50/50 px-2 py-0.5 rounded-full">
                {stat.percentage}
              </span>
            </div>

            {/* Pastki qism (Qiymat va Sarlavha) */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                {stat.value}
              </h2>
              <p className="text-slate-400 text-sm font-medium mt-1">
                {stat.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardStats;
