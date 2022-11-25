import * as request from '~/utils/request';

export const register = async (payload) => {
  const response = await request.post('/register', payload);
  return response;
};

export const auth = async (payload) => {
  const response = await request.post('/auth', payload);
  return response;
};
