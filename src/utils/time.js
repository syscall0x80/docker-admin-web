import moment from 'moment';

export const formatCreatedAt = (date) => {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
};
