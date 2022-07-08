import { rest } from 'msw';
import {
  MovieListItem,
  MovieListResult
} from '../../../src/app/APIInfo';
import { paths } from '../../../src/routes/routes';

export const movie: MovieListItem = {
  poster_path: "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
  adult: false,
  overview: "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
  release_date: "2016-08-03",
  genre_ids: [
    14,
    28,
    80
  ],
  id: 297761,
  original_title: "Suicide Squad",
  original_language: "en",
  title: "Suicide Squad",
  backdrop_path: "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
  popularity: 48.261451,
  vote_count: 1466,
  video: false,
  vote_average: 5.91
}

const moviesPerPage = 20;

export const movieList: MovieListResult = {
  page: 1,
  results: Array(moviesPerPage).fill(movie).map((movie) => ({ ...movie, id: Math.random() })),
  total_pages: 1,
  total_results: moviesPerPage
}

export default rest.get(paths.popularMovies.replace('popular', '*'), (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(movieList)
  )
});
