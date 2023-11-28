import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale'; 

export const DateTimePretty = ({Component, date}) => {
  const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true, locale: ru });
  return (
    <Component date={timeAgo}/>
  )
}
