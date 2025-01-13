import React, { JSX } from "react";

export type AdminStatsType = {
  children?: React.ReactNode;
  cardData?: {
    statCount: number;
    label: string;
    icon: React.ReactNode;
  };
  graphData?: {
    statPercentage: number;
    chartData: object[];
    chartLabel: string;
    chartColor: string;
  };
};

export type LineChartProps = {
  data: object[];
  label: string;
  color: string;
};
