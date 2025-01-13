"use client";
import {
  DropdownFilter,
  FiltersTopBar,
} from "@/app/components/ui/FilterComponents";
import React from "react";

const UsersPage = () => {
  return (
    <React.Fragment>
      <FiltersTopBar>
        <DropdownFilter
          handleFilterChange={(value) => {
            console.log(value);
          }}
        />
      </FiltersTopBar>
    </React.Fragment>
  );
};

export default UsersPage;
