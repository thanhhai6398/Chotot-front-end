import axios from 'axios';
import { LOCAL_STORAGE_KEY } from './Enum';
const auth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
const request = axios.create({
  baseURL: 'http://localhost:5000/',
});
const options = {
  headers: { Authorization: 'Bearer ' + auth.accessToken },
};

export const get = async (path) => {
  const response = await request.get(path, options);
  return response.data;
};

export const post = async (path, payload) => {
  const response = await request.post(path, payload, options);

  return response.data;
};

export const deleteRequest = async (path) => {
  const response = await request.delete(path, options);
  return response.data;
};

export const put = async (path, payload) => {
  const response = await request.put(path, payload, options);
  return response.data;
};

export default request;
