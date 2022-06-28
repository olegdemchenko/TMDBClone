import { useState, useEffect } from 'react';

export default function useUpdatePageAfterScroll() {
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    function fetchExtraMovies() {
      setPage((currPage: number) => currPage + 1);
    }

    window.addEventListener('scroll', fetchExtraMovies);
    return () => window.removeEventListener('scroll', fetchExtraMovies);
  }, []);
  return page;
}
