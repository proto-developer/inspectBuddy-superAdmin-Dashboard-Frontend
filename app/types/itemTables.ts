export type TableProps = {
  children: React.ReactNode;
  className?: string;
};

export type PaginationButtonProps = {
  className?: string;
  icon: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

type CommonPaginationProps = {
  paginationData: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
};

export type UsersPaginationProps = CommonPaginationProps & {
  filtersData: {
    page: number;
    search: string;
    subscriptionPlan: string;
  };
  setFiltersData: (value: { page: number }) => void;
};
