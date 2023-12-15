import { api } from './Api';
export const getAllPhoto = async (q = '', page = 1) => {
  const { data } = await api({
    params: {
      key: '40708287-91fb1ed28a9cbdffb99391946',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      q,
      page,
    },
  });

  return data;
};
