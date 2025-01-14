export type DropdownFilterTypes = {
  // filtersData: object;
  // setFiltersData: (data: object) => void;
  handleFilterChange: (value: string) => void;
};

export type SearchFilterTypes = {
  onSearch: (value: string) => void;
  placeholder?: string;
};
