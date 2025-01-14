"use client";
import {
  DropdownFilter,
  FiltersTopBar,
  SearchFilter,
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
        <SearchFilter placeholder="Search Users..." onSearch={
          (value) => {
            console.log("Search Query", value)
          }
        } />
      </FiltersTopBar>
    </React.Fragment>
  );
};

export default UsersPage;
