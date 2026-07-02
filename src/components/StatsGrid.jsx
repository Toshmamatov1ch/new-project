import React from "react";
import StatsCard from "./StatsCard";
import { LuFileText, LuLayers, LuTrendingUp, LuUsers } from "react-icons/lu";

function StatsGrid() {
  const stats = [
    {
      id: 1,
      title: "Total Posts",
      value: "24",
      change: "+12%",
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: <LuFileText className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Categories",
      value: "6",
      change: "+2",
      color: "text-purple-600",
      bg: "bg-purple-50",
      icon: <LuLayers className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Total Views",
      value: "12.5K",
      change: "+23%",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      icon: <LuTrendingUp className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "Active Users",
      value: "1.2K",
      change: "",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      icon: <LuUsers className="w-5 h-5" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {stats.map((item) => (
        <StatsCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default StatsGrid;
