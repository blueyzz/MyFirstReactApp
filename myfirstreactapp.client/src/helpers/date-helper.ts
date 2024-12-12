import { format } from 'date-fns';

/*
 * Format Date and Time
 */
export const formatDate = (date: Date): string => {
    return format(new Date(date), 'MM/dd/yyyy h:mm a');
};