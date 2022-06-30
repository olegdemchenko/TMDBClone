import { useState, useEffect } from 'react';

export function useUpdatePageAfterScroll() {
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    function fetchExtraMovies() {
      const bottomPadding = 200;
      if ((window.innerHeight + window.scrollY) > document.body.offsetHeight - bottomPadding) {
        setPage((currPage: number) => currPage + 1);
      }
    }

    window.addEventListener('scroll', fetchExtraMovies);
    return () => window.removeEventListener('scroll', fetchExtraMovies);
  }, []);
  return page;
}
