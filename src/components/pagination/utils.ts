function isPageVisible(page: number, selectedPage: number, totalPages: number) {
  const visiblePagesFromStart = 7;
  const visiblePageSiblings = 3;
  const visibleBorderPages = 2;

  const isPageInStartVisibleRange =
    (selectedPage <= visiblePagesFromStart - visiblePageSiblings &&
      page <= visiblePagesFromStart) ||
    (selectedPage <= visiblePagesFromStart &&
      page <= selectedPage + visiblePageSiblings);

  const isPageInEndVisibleRange =
    (selectedPage >
      totalPages - (visiblePagesFromStart - visiblePageSiblings) &&
      page > totalPages - visiblePagesFromStart) ||
    (selectedPage > totalPages - visiblePagesFromStart &&
      page > totalPages - (visiblePagesFromStart - visiblePageSiblings));

  const isPageInMiddleVisibleRange =
    page <= visibleBorderPages ||
    page > totalPages - visibleBorderPages ||
    (page >= selectedPage - visiblePageSiblings &&
      page <= selectedPage + visiblePageSiblings);

  return (
    isPageInStartVisibleRange ||
    isPageInEndVisibleRange ||
    isPageInMiddleVisibleRange
  );
}

function findVisiblePages(selectedPage: number, totalPages: number) {
  return Array.from({ length: totalPages }, (_, i) => i + 1).filter((page) =>
    isPageVisible(page, selectedPage, totalPages)
  );
}

export default findVisiblePages;
