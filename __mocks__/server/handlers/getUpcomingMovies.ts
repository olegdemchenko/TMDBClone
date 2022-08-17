import { rest } from 'msw';
import { paths } from '../../../src/routes/routes';
import { error } from './commonData';

export default rest.get(paths.upcomingMovies, (req, res, ctx) => {
  return res(ctx.status(404), ctx.json(error));
});
