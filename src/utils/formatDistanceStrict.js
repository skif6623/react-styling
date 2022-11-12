import { formatDistanceStrict } from 'date-fns';
import { uk } from 'date-fns/locale';

export function formatEventDuration(start, end) {
  return formatDistanceStrict(Date.parse(start), Date.parse(end), {
    locale: uk,
  });
}
