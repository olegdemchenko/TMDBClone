import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useSearchParams } from 'react-router-dom';
import findVisiblePages from './utils';

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

  const next = currentPage < total ? <Pagination.Next onClick={handleClick(`${currentPage + 1}`)}>Next</Pagination.Next> : null;
  const prev = currentPage > 1 ? <Pagination.Prev onClick={handleClick(`${currentPage - 1}`)}>Prev</Pagination.Prev> : null;
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
