import { useParams } from 'react-router-dom';
import { extractIDFromMediaPath } from '../../routes';

export function useRetrieveIdFromLocation() {
  const { credentials } = useParams<'credentials'>();
  const id = extractIDFromMediaPath(credentials);
  return Number(id);
}
