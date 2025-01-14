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
import { Table } from "@mantine/core";
import { SingleUserType } from "@/app/types/allUsers";
import {
  TableRoot,
  UserSubscriptionCard,
} from "@/app/components/ui/DataTableComponents";
import IconLink from "@/app/components/ui/IconLink";
import { IconEyeDown } from "@tabler/icons-react";
import { DELETE_ICON } from "@/public/icons/Dynamic_Icons";
import IconButton from "@/app/components/ui/IconButton";

const UsersPage = () => {
  const [filtersData, setFiltersData] = useState({
    subscriptionPlan: "All Users",
    page: 1,
    search: "",
  });

  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["fetchAllUsers", filtersData],
    queryFn: () => fetchAllUsers(filtersData),
  });

  if (isError) {
    return toast.error("Error!", {
      description: error.message || `Couldn't fetch Users.`,
      duration: 3000,
    });
  }

  if (isSuccess) {
    toast.success("Success!", {
      description: "Users Fetched Successfully.",
      duration: 3000,
    });
  }

  const rows = data?.users?.map((user: SingleUserType, index: number) => (
    <Table.Tr key={user._id}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{user.fullname}</Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>
        <UserSubscriptionCard subscriptionPlan={user.role} />
      </Table.Td>
      <Table.Td className="flex items-center gap-[12px] justify-end">
        <IconLink
          href="#"
          label="View Detail"
          icon={<IconEyeDown className="w-[16px] h-[16px]" />}
        />
        <IconButton
          onClick={() => {
            console.log("Delete");
          }}
          icon={<DELETE_ICON className="text-[#FF613E]" />}
        />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <React.Fragment>
      <FiltersTopBar>
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
      <TableRoot className="md:px-[24px] px-[12px] sm:py-[24px] py-[12px]">
        <Table>
          <Table.Thead className="!rounded-[8px] xl:!p-[24px] lg:!p-[12px] !bg-[#F3F8FF] !p-[12px]">
            <Table.Tr>
              <Table.Th>S#NO</Table.Th>
              <Table.Th>User Name</Table.Th>
              <Table.Th>User Email</Table.Th>
              <Table.Th>Plan Status</Table.Th>
              <Table.Th>Plan Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </TableRoot>

      {isLoading && <div>Loading...</div>}
    </React.Fragment>
  );
};

export default UsersPage;
