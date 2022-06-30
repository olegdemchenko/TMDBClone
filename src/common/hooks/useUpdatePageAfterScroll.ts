import { useState, useEffect } from 'react';

export function useUpdatePageAfterScroll(active: boolean) {
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    function fetchExtraMovies() {
      const bottomPadding = 200;
      const isBottom = (window.innerHeight + window.scrollY)
        > (document.body.offsetHeight - bottomPadding);
      if (isBottom && active) {
        setPage((currPage: number) => currPage + 1);
      }
    }

    window.addEventListener('scroll', fetchExtraMovies);
    return () => window.removeEventListener('scroll', fetchExtraMovies);
  }, [active]);
  return page;
}
