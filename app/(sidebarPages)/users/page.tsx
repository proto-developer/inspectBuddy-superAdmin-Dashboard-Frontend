"use client";
import {
  DropdownFilter,
  FiltersTopBar,
  SearchFilter,
} from "@/app/components/ui/FilterComponents";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllUsers } from "@/app/api/users";
import { toast } from "sonner";
import { SingleUserType } from "@/app/types/allUsers";
import IconLink from "@/app/components/ui/IconLink";
import { IconEyeDown } from "@tabler/icons-react";
import { DELETE_ICON } from "@/public/icons/Dynamic_Icons";
import IconButton from "@/app/components/ui/IconButton";
import { USERS_TABLE_HEADINGS } from "@/app/constants/itemTables";
import Table from "@/app/components/ui/DataTableComponents";

const UsersPage = () => {
  const [filtersData, setFiltersData] = useState({
    subscriptionPlan: "All Users",
    page: 1,
    search: "",
  });

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["fetchAllUsers", filtersData],
    queryFn: () => fetchAllUsers(filtersData),
  });

  if (isError) {
    return toast.error("Error!", {
      description: error.message || `Couldn't fetch Users.`,
      duration: 3000,
    });
  }

  // if (isSuccess) {
  //   toast.success("Success!", {
  //     description: "Users Fetched Successfully.",
  //     duration: 3000,
  //   });
  // }

  const rows = data?.users?.map((user: SingleUserType, index: number) => (
    <Table.ItemRoot key={user._id}>
      <Table.SingleColumn>
        <p className="text-[14px] font-medium text-gray-dark">{index + 1}</p>
      </Table.SingleColumn>
      <Table.SingleColumn>
        <p className="text-[14px] font-medium text-gray-dark">
          {user.fullname}
        </p>
      </Table.SingleColumn>
      <Table.DoubleColumn>
        <p className="text-[14px] font-medium text-gray-dark">{user.email}</p>
      </Table.DoubleColumn>
      <Table.SingleColumn>
        <Table.UserSubscriptionCard subscriptionPlan={user.role} />
      </Table.SingleColumn>
      <Table.DoubleColumn>
        <Table.ItemActions>
          <IconLink
            href={`/users/${user._id}`}
            icon={<IconEyeDown />}
            label="View Details"
          />
          <IconButton
            type="button"
            icon={<DELETE_ICON className="text-[#FF613E]" />}
          />
        </Table.ItemActions>
      </Table.DoubleColumn>
    </Table.ItemRoot>
  ));

  return (
    <React.Fragment>
      <FiltersTopBar className="md:pr-[24px] pr-[12px]">
        <DropdownFilter
          handleFilterChange={(value) =>
            setFiltersData({ ...filtersData, subscriptionPlan: value })
          }
        />
        <SearchFilter
          placeholder="Search Users..."
          onSearch={(value) =>
            setFiltersData({ ...filtersData, search: value })
          }
        />
      </FiltersTopBar>
      <Table.Root className="md:px-[24px] px-[12px] sm:py-[24px] py-[12px]">
        <Table.Header>
          {USERS_TABLE_HEADINGS.map((heading) =>
            heading.key === "userEmail" ? (
              <Table.DoubleColumn key={heading.key}>
                <Table.HeaderItem heading={heading.value} />
              </Table.DoubleColumn>
            ) : (
              <Table.SingleColumn key={heading.key}>
                <Table.HeaderItem heading={heading.value} />
              </Table.SingleColumn>
            )
          )}
        </Table.Header>
        <Table.Body>
          {isLoading ? (
            <Table.ItemsSkeleton />
          ) : data?.users?.length < 1 ? (
            <div className="flex justify-center items-center h-full">
              <p className="text-[14px] font-medium text-gray-dark text-center">
                No Users Found! <br /> Add a new User to get started.
              </p>
            </div>
          ) : (
            rows
          )}
        </Table.Body>
        <Table.Pagination
          filtersData={filtersData}
          setFiltersData={(value) =>
            setFiltersData({ ...filtersData, page: value.page })
          }
          paginationData={{
            totalPages: data?.totalPages,
            currentPage: data?.currentPage,
            totalItems: data?.totalUsers,
          }}
        />
      </Table.Root>
    </React.Fragment>
  );
};

export default UsersPage;
