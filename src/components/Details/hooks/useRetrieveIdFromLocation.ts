import { useParams } from 'react-router-dom';
import { extractIDFromMediaPath } from '../../../routes';

function useRetrieveIdFromLocation() {
  const { movieCredentials } = useParams<'movieCredentials'>();
  const movieId = extractIDFromMediaPath(movieCredentials);
  return Number(movieId);
}

export default useRetrieveIdFromLocation;
