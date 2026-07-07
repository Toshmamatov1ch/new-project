import { FileText, Layers, TrendingUp, Users } from "lucide-react";

const statsData = [
  {
    id: 1,
    title: "Total Posts",
    value: "24",
    percentage: "+12%",
    icon: FileText,
    status: "increase",
    bgColor: "bg-slate-100", // Tailwind klassi
    iconColor: "text-indigo-600", // Tailwind klassi
  },
  {
    id: 2,
    title: "Categories",
    value: "6",
    percentage: "+2",
    icon: Layers,
    status: "increase",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    id: 3,
    title: "Total Views",
    value: "12.5K",
    percentage: "+23%",
    icon: TrendingUp,
    status: "increase",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    id: 4,
    title: "Active Users",
    value: "1.2K",
    percentage: "+8%",
    icon: Users,
    status: "increase",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];

export default statsData;
