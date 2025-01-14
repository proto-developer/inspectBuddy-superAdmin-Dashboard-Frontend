import { USERS_SUBSCRIPTIONS_TYPE } from "@/app/constants/filters";
import { DropdownFilterTypes, SearchFilterTypes } from "@/app/types/filters";
import { ComboboxItem, Select } from "@mantine/core";
import { useCallback, useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import debounce from "lodash.debounce";

const FiltersTopBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="border border-[#CCE2FF] rounded-[8px] py-[8px] px-[12px] md:h-[56px] md:flex items-center justify-between relative sm:gap-[16px] gap-[12px] grid grid-cols-2">
      {children}
    </section>
  );
};

const DropdownFilter = ({ handleFilterChange }: DropdownFilterTypes) => {
  const [value, setValue] = useState<ComboboxItem | null>(
    USERS_SUBSCRIPTIONS_TYPE[0] || null
  );

  const handleChange = (option: ComboboxItem | null) => {
    if (!option) return;
    setValue(option);
    handleFilterChange(option.value);
  };

  return (
    <Select
      value={value?.value}
      onChange={(_value, option) => handleChange(option)}
      data={USERS_SUBSCRIPTIONS_TYPE}
      withCheckIcon={false}
      comboboxProps={{
        transitionProps: { transition: "pop", duration: 200 },
        dropdownPadding: 8,
      }}
      rightSection={<IconChevronDown size={18} className="text-[#6C727F]" />}
    />
  );
};

const SearchFilter = ({ placeholder, onSearch }: SearchFilterTypes) => {
  const [searchBarValue, setSearchBarValue] = useState("");

  const debouncedHandleSearch = useCallback(
    debounce((query: string) => onSearch(query), 500),
    []
  );

  return (
    <div
      className={`flex w-[305px] h-[40px] py-[8px] px-[16px] bg-[#F3F8FF] rounded-[8px] gap-[8px]`}
    >
      <Image
        width={24}
        height={24}
        src="/icons/search-icon.svg"
        alt="search-icon"
      />
      <input
        type="search"
        id="inspections-search"
        value={searchBarValue}
        onChange={(e) => {
          setSearchBarValue(e.target.value);
          debouncedHandleSearch(e.target.value);
        }}
        // onKeyDown={(e) =>
        //   e.key === "Enter" && debouncedHandleSearch(e.currentTarget.value)
        // }
        placeholder={placeholder ? placeholder : "Search..."}
        className="px-[8px] w-full bg-[#F3F8FF] border-0 focus:outline-none h-[24px] font-medium text-darkBlue md:text-[16px] sm:text-[14px]"
      />
    </div>
  );
};

export { FiltersTopBar, DropdownFilter, SearchFilter };
