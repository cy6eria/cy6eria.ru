import { format as dateToString } from 'date-fns';
import ru from 'date-fns/locale/ru';

export const format = (date) => {
    return dateToString(new Date(date), 'dd MMMM yyyy', { locale: ru });
}
