function isPageVisible(page: number, currentPage: number, totalPages: number) {
  const visiblePagesFromStart = 7;
  const visiblePageSiblings = 3;
  const visibleBorderPages = 2;
  if (
    currentPage <= visiblePagesFromStart - visiblePageSiblings &&
    page <= visiblePagesFromStart
  ) {
    return true;
  }
  if (
    currentPage <= visiblePagesFromStart &&
    page <= currentPage + visiblePageSiblings
  ) {
    return true;
  }
  if (
    currentPage > totalPages - (visiblePagesFromStart - visiblePageSiblings) &&
    page > totalPages - visiblePagesFromStart
  ) {
    return true;
  }
  if (
    currentPage > totalPages - visiblePagesFromStart &&
    page > totalPages - (visiblePagesFromStart - visiblePageSiblings)
  ) {
    return true;
  }
  return (
    page <= visibleBorderPages ||
    page > totalPages - visibleBorderPages ||
    (page >= currentPage - visiblePageSiblings &&
      page <= currentPage + visiblePageSiblings)
  );
}

function findVisiblePages(currentPage: number, totalPages: number) {
  return Array.from({ length: totalPages }, (_, i) => i + 1).filter((page) =>
    isPageVisible(page, currentPage, totalPages)
  );
}

export default findVisiblePages;
