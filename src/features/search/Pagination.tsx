import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useSearchParams } from 'react-router-dom';

function isPageVisible(page: number, currentPage: number, totalPages: number) {
  const visiblePagesFromStart = 7;
  const visiblePageSiblings = 3;
  const visibleBorderPages = 2;
  if (currentPage <= visiblePagesFromStart - visiblePageSiblings && page <= visiblePagesFromStart) {
    return true;
  }
  if (currentPage <= visiblePagesFromStart && page <= currentPage + visiblePageSiblings) {
    return true;
  }
  if (currentPage > totalPages - (visiblePagesFromStart - visiblePageSiblings)
    && page > totalPages - visiblePagesFromStart) {
    return true;
  }
  if (currentPage > totalPages - visiblePagesFromStart
    && page > totalPages - (visiblePagesFromStart - visiblePageSiblings)) {
    return true;
  }
  return page <= visibleBorderPages || page > totalPages - visibleBorderPages
    || (page >= currentPage - visiblePageSiblings && page <= currentPage + visiblePageSiblings);
}

export function findVisiblePages(currentPage: number, totalPages: number) {
  return Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter((page) => isPageVisible(page, currentPage, totalPages));
}

interface PaginationProps {
  currentPage: number;
  total: number;
}

function CustomPagination({
  currentPage,
  total,
}: PaginationProps) {
  if (total === 1) {
    return null;
  }
  const visiblePages = findVisiblePages(currentPage, total);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (page: string) => () => {
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.set('page', page);
    setSearchParams(urlSearchParams);
  };

  const next = currentPage < total ? <Pagination.Next onClick={handleClick(`${currentPage + 1}`)} /> : null;
  const prev = currentPage > 1 ? <Pagination.Prev onClick={handleClick(`${currentPage - 1}`)} /> : null;
  const paginationComponents = visiblePages.reduce((acc, page, index, pages) => {
    const paginationPage = (
      <Pagination.Item
        active={page === currentPage}
        onClick={handleClick(`${page}`)}
      >
        {page}
      </Pagination.Item>
    );
    if ((page !== pages[index - 1] + 1) && page !== 1) {
      return [...acc,
        <Pagination.Ellipsis />,
        paginationPage,
      ];
    }
    return [...acc, paginationPage];
  }, []);
  return (
    <Pagination>
      {prev}
      {...paginationComponents}
      {next}
    </Pagination>
  );
}

export default CustomPagination;
