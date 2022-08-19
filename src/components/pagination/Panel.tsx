import React from 'react';
import { useTranslation } from 'react-i18next';
import Pagination from 'react-bootstrap/Pagination';
import { pageItemStyles, pageLinkStyles } from './styles';

interface PanelProps {
  next: boolean;
  prev: boolean;
  currentPage: number;
  visiblePages: number[];
  handleClick: (page: number) => () => void;
}

function Panel({
  next,
  prev,
  currentPage,
  visiblePages,
  handleClick,
}: PanelProps) {
  const { t } = useTranslation('pagination');

  const nextBtn = next ? (
    <Pagination.Next onClick={handleClick(currentPage + 1)}>
      {t('next')}
    </Pagination.Next>
  ) : null;
  const prevBtn = prev ? (
    <Pagination.Prev onClick={handleClick(currentPage - 1)}>
      {t('prev')}
    </Pagination.Prev>
  ) : null;
  const paginationComponents = visiblePages.reduce(
    (acc, page, index, pages) => {
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
      if (page !== pages[index - 1] + 1 && page !== 1) {
        return [...acc, <Pagination.Ellipsis />, paginationPage];
      }
      return [...acc, paginationPage];
    },
    []
  );
  return (
    <Pagination css={pageLinkStyles}>
      {prevBtn}
      {...paginationComponents}
      {nextBtn}
    </Pagination>
  );
}

export default Panel;
