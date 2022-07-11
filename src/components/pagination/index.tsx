import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import Pagination from 'react-bootstrap/Pagination';
import { useSearchParams } from 'react-router-dom';
import findVisiblePages from './utils';

interface PaginationProps {
  selectedPage?: number
  total: number;
}

const pageItemStyles = css({
  '&.active .page-link': {
    border: '2px solid black',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'normal',
  },
  '&:first-child .page-link': {
    borderRadius: 0,
  },
});

const pageLinkStyles = css({
  '& .page-link': {
    border: 'none',
    color: 'black',
    fontWeight: 'bold',
  },
});

function CustomPagination({
  selectedPage = 1,
  total,
}: PaginationProps) {
  if (total === 1) {
    return null;
  }
  const [currentPage, setCurrentPage] = useState<number>(selectedPage);
  const visiblePages = findVisiblePages(currentPage, total);
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation('pagination');
  const handleClick = (page: number) => () => {
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.set('page', String(page));
    setSearchParams(urlSearchParams);
    setCurrentPage(page);
  };

  const next = currentPage < total
    ? <Pagination.Next onClick={handleClick(currentPage + 1)}>{t('next')}</Pagination.Next>
    : null;
  const prev = currentPage > 1
    ? <Pagination.Prev onClick={handleClick(currentPage - 1)}>{t('prev')}</Pagination.Prev>
    : null;
  const paginationComponents = visiblePages.reduce((acc, page, index, pages) => {
    const paginationPage = (
      <Pagination.Item
        active={page === currentPage}
        css={pageItemStyles}
        onClick={handleClick(page)}
        data-testid={page}
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
    <Pagination css={pageLinkStyles}>
      {prev}
      {...paginationComponents}
      {next}
    </Pagination>
  );
}

export default CustomPagination;
