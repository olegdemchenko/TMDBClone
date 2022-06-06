import { findVisiblePages } from '../src/features/search/Pagination';

test.each([
  [1, 15, [1, 2, 3, 4, 5, 6, 7, 14, 15]],
  [7, 15, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15]],
  [8, 15, [1, 2, 5, 6, 7, 8, 9, 10, 11, 14, 15]],
  [9, 15, [1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]],
  [14, 15, [1, 2, 9, 10, 11, 12, 13, 14, 15]],
])('find visible pages when current page is %i and total page count is %i', (currentPage, totalPages, expected) => {
  expect(findVisiblePages(currentPage, totalPages)).toEqual(expected);
});
