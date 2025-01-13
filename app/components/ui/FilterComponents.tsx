"use client";
import { USERS_SUBSCRIPTIONS_TYPE } from "@/app/constants/filters";
import { DropdownFilterTypes } from "@/app/types/filters";
import { ComboboxItem, Select } from "@mantine/core";
import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const FiltersTopBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="border border-[#CCE2FF] rounded-[8px] py-[8px] px-[12px] md:h-[56px] md:flex items-center justify-between relative sm:gap-[16px] gap-[12px] grid grid-cols-2">
      {children}
    </section>
  );
};

const DropdownFilter = ({ handleFilterChange }: DropdownFilterTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<ComboboxItem | null>(
    USERS_SUBSCRIPTIONS_TYPE[0] || null
  );

  const handleChange = (option: ComboboxItem | null) => {
    setIsOpen(false);
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
        onOpen: () => setIsOpen(true),
      }}
      rightSection={
        isOpen ? (
          <IconChevronUp size={20} className="text-[#6C727F]" />
        ) : (
          <IconChevronDown size={20} className="text-[#6C727F]" />
        )
      }
    />
  );
};

export { FiltersTopBar, DropdownFilter };
