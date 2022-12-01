import * as request from '~/utils/request';

export const httpGetPostById = async (id) => {
  try {
    const res = request.get(`/posts/${id}`);
    return res;
  } catch (error) {
    console.log(error.response.data);
  }
};
export const httpAddPost = async (payload) => {
  try {
    const res = request.post('/posts/upload', payload);
    return res;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const httpGetPostByUserId = (userId, size = 12, page = 1) => {
  try {
    const res = request.get(`/posts/user/${userId}?size=${size}&page=${page}`);
    return res;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const httpPutActivePost = (id) => {
  try {
    const res = request.put(`/posts/active/${id}`);
    return res;
  } catch (error) {
    console.log(error.response.data);
  }
};
export const httpPutHidePost = (id) => {
  try {
    const res = request.put(`/posts/hide/${id}`);
    return res;
  } catch (error) {
    console.log(error.response.data);
  }
};
