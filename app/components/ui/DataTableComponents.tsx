import { TableProps } from "@/app/types/itemTables";
import { cn } from "@/app/utils/cn";
import { getPlanDetails } from "@/app/utils/userPlanStatus";
import { Skeleton } from "@mantine/core";
import Image from "next/image";

export const TableRoot = ({ children, className }: TableProps) => {
  return (
    <div
      className={cn(
        "mt-[24px] border-[1.5px] border-[#CCE2FF] rounded-[8px]",
        className
      )}
    >
      {children}
    </div>
  );
};

const Header = ({ children }: TableProps) => {
  return (
    <div
      className={cn(
        "rounded-[8px] grid grid-cols-7 gap-x-[20px] xl:p-[24px] lg:p-[12px]  bg-[#F3F8FF] p-[12px]"
      )}
    >
      {children}
    </div>
  );
};

const HeaderItem = ({ heading }: TableProps) => {
  return (
    <>
      <h2 className="font-bold text-[16px] text-darkBlue">{heading}</h2>
      <div className="flex flex-col justify-center gap-[4px] h-[8px]">
        <Image
          width={7}
          height={5}
          src="/icons/filledArrowUp.svg"
          alt="Filled Arrow Up"
          className="hover:cursor-pointer"
          onClick={() => {}}
        />
        <Image
          width={7}
          height={5}
          src="/icons/filledArrowDown.svg"
          alt="Filled Arrow Down"
          className="hover:cursor-pointer"
          onClick={() => {}}
        />
      </div>
    </>
  );
};

const TableSkeleton = () => {
  return Array(4)
    .fill(0)
    .map((_, index) => (
      <div key={index} className="border-b-[1.5px] border-[#E4F0FF] pb-[24px]">
        <Skeleton height={68} radius="sm" />
      </div>
    ));
};

export const UserSubscriptionCard = ({
  subscriptionPlan,
}: {
  subscriptionPlan: string;
}) => {
  const validPlans = [
    "FREETIER",
    "TRIALTIER",
    "STANDARDTIER",
    "TOPTIER",
  ] as const;

  const isValidPlan = validPlans.includes(
    subscriptionPlan as (typeof validPlans)[number]
  );

  const { bgColor, textColor, status } = isValidPlan
    ? getPlanDetails(subscriptionPlan as (typeof validPlans)[number])
    : { status: "Unknown Plan", bgColor: "#F5F5F5", textColor: "#000000" };

  return (
    <div
      className={`p-[8px] rounded-[8px] w-fit bg-[${bgColor}] text-[${textColor}]`}
    >
      <p className={cn("text-[14px] font-bold")}>{status}</p>
    </div>
  );
};
