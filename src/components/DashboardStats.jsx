import React from "react";
import statsData from "../data/DashboardCard.js";

function DashboardStats() {
  return (
    <div className="flex gap-5 p-5 flex-wrap justify-center sm:justify-start ">
      {statsData.map((stat) => {
        const IconComponent = stat.icon;

        return (
          <div
            key={stat.id}
            className="stat-card border border-slate-200 rounded-xl p-5 w-75.5 h-42.5 flex-1 bg-white shadow-sm flex flex-col md:flex-row"
          >
            {/* Yuqori qism (Ikonka va Foiz) */}
            <div className="flex items-center justify-between">
              {/* Dinamik klaslar shu yerda qo'shildi */}
              <div
                className={`icon-wrapper p-2 rounded-lg flex items-center justify-center ${stat.bgColor}`}
              >
                {IconComponent && (
                  <IconComponent
                    size={24}
                    className={stat.iconColor} // Ikonka rangi ham Tailwind klassidan olyapti
                  />
                )}
              </div>
              <span className="text-emerald-500 font-bold text-sm">
                {stat.percentage}
              </span>
            </div>

            {/* Pastki qism (Qiymat va Sarlavha) */}
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-slate-800 m-0">
                {stat.value}
              </h2>
              <p className="text-zinc-500 text-sm mt-1 m-0">{stat.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardStats;
