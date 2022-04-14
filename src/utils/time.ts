import dayjs from 'dayjs';

export const formDate = (d: number) => {
  return dayjs(d).format('YYYY-MM-DD HH:mm:ss');
};

