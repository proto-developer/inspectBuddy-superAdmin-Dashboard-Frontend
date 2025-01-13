import { AdminStatsType } from "@/app/types/dashboard";
import {
  NEGATIVE_TREND_ICON,
  POSITIVE_TREND_ICON,
} from "@/public/icons/Dynamic_Icons";
import { CustomLineChart } from "../CustomLineChart";

const Root = ({ children }: AdminStatsType) => {
  return <div className="flex items-center gap-[25px]">{children}</div>;
};

const StatCardItem = ({ children }: AdminStatsType) => {
  return (
    <div className="border border-[#CCE2FF] rounded-[12px] p-[20px] min-w-[250px] h-[210px] flex flex-col justify-center items-center gap-[10px] w-full max-w-[330px]">
      {children}
    </div>
  );
};

const StatCardTitle = ({ cardData }: AdminStatsType) => {
  return (
    <div className="flex flex-col gap-[10px] items-center w-full">
      <div className="flex justify-between items-center w-full">
        <div>
          <p className="text-[24px] font-bold text-darkBlue">
            {cardData?.statCount}k
          </p>
          <p className="text-[16px] text-gray-dark">{cardData?.label}</p>
        </div>
        {cardData?.icon}
      </div>
      <div className="border-b border-[#CCE2FF] w-full"></div>
    </div>
  );
};

const StatCardGraph = ({ graphData }: AdminStatsType) => {
  return (
    <div className="flex-1 flex flex-col gap-[16px] w-full">
      <div className="flex items-center">
        {graphData!.statPercentage > 0 ? (
          <POSITIVE_TREND_ICON />
        ) : (
          <NEGATIVE_TREND_ICON />
        )}
        &nbsp;
        <p className="text-[14px]">
          <span
            className={`${
              graphData!.statPercentage > 0
                ? "text-[#27AE60]"
                : "text-[#EB5757]"
            }`}
          >
            {graphData!.statPercentage}%
          </span>
          &nbsp;<span className="uppercase text-gray-dark">VS PREV.</span>
          &nbsp;<span className="text-darkBlue uppercase">28 DAYS</span>
        </p>
      </div>
      <CustomLineChart
        data={graphData!.chartData}
        label={graphData!.chartLabel}
        color={graphData!.chartColor}
      />
    </div>
  );
};

// Exporting all components as properties of an object
const AdminStats = { Root, StatCardItem, StatCardTitle, StatCardGraph };

export default AdminStats;
