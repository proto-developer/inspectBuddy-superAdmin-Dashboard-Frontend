import AdminStats from "@/app/components/ui/dashboard/AdminStats";
import { ADMIN_DASHBOARD_STATS } from "@/app/constants/adminDashboard";
import React from "react";

export default function Dashboard() {
  return (
    <AdminStats.Root>
      {ADMIN_DASHBOARD_STATS.map((stat) => (
        <AdminStats.StatCardItem key={stat._id}>
          <AdminStats.StatCardTitle
            cardData={{
              label: stat.label,
              statCount: stat.statCount,
              icon: <stat.icon />,
            }}
          />
          <AdminStats.StatCardGraph
            graphData={{
              chartData: stat.chartData,
              chartColor: stat.chartColor,
              chartLabel: stat.label,
              statPercentage: stat.statPercentage,
            }}
          />
        </AdminStats.StatCardItem>
      ))}
    </AdminStats.Root>
  );
}
