import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import findVisiblePages from './utils';
import Panel from './Panel';

interface PaginationProps {
  selectedPage?: number;
  total: number;
}

function CustomPagination({ selectedPage = 1, total }: PaginationProps) {
  if (total === 1) {
    return null;
  }
  const [currentPage, setCurrentPage] = useState<number>(selectedPage);
  const visiblePages = findVisiblePages(currentPage, total);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (page: number) => () => {
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.set('page', String(page));
    setSearchParams(urlSearchParams);
    setCurrentPage(page);
  };

  return (
    <Panel
      next={currentPage < total}
      prev={currentPage > 1}
      currentPage={currentPage}
      visiblePages={visiblePages}
      handleClick={handleClick}
    />
  );
}

export default CustomPagination;
