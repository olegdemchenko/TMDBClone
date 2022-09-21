import { useParams } from 'react-router-dom';
import { extractIDFromMediaPath } from '../../../routes';

function useRetrieveIdFromLocation() {
  const { credentials } = useParams<'credentials'>();
  const id = extractIDFromMediaPath(credentials);
  return Number(id);
}

export default useRetrieveIdFromLocation;
