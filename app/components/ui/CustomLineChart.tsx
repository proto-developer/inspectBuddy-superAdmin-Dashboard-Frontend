"use client";
import { LineChartProps } from "@/app/types/dashboard";
import { LineChart } from "@mantine/charts";

export const CustomLineChart = ({ data, label, color }: LineChartProps) => {
  return (
    <LineChart
      h={50}
      data={data}
      series={[
        {
          name: label + ` Value`,
          label: label,
          color: color,
        },
      ]}
      dataKey="date"
      withDots={false}
      strokeWidth={3}
      curveType="natural"
      yAxisProps={{ domain: [-25, 40] }}
      valueFormatter={(value) => `${value}`}
      withXAxis={false}
      withYAxis={false}
      gridAxis="none"
    />
  );
};
