import * as request from '~/utils/request';

export const register = (payload) => {
  const response = request.post('/register', payload);
  return response;
};

export const auth = (payload) => {
  const response = request.post('/auth', payload);
  return response;
};

export const logout = () => {
  const response = request.get('/logout');
  return response;
};
