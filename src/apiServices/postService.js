import * as request from '~/utils/request';
import { POST_STATUS } from '~/utils/Enum';

export const httpGetPostById = (id) => {
  try {
    const res = request.get(`/posts/${id}`);
    return res;
  } catch (error) {
    console.log(error.response.data.errMsg);
  }
};

export const httpGetAllPost = (size = 12, page = 1) => {
  try {
    const res = request.get(`/posts?size=${size}&page=${page}`);
    return res;
  } catch (error) {
    console.log(error.response.data.errMsg);
  }
};
export const httpGetPostByStatusId = (
  size = 12,
  page = 1,
  status = POST_STATUS.ACTIVE
) => {
  try {
    const res = request.get(
      `/posts/status/${status}?size=${size}&page=${page}`
    );
    return res;
  } catch (error) {
    console.log(error.response.data.errMsg);
  }
};

export const httpAddPost = (payload) => {
  try {
    const res = request.post('/posts/upload', payload);
    return res;
  } catch (error) {
    console.log(error.response.data.errMsg);
  }
};

export const httpEditPost = (id, payload) => {
  try {
    console.log('CALL API');
    const res = request.put(`/posts/edit/${id}`, payload);
    return res;
  } catch (error) {
    console.log(error.response.data.errMsg);
  }
};

export const httpGetPostByUserId = (userId, size = 12, page = 1) => {
  try {
    const res = request.get(`/posts/user/${userId}?size=${size}&page=${page}`);
    return res;
  } catch (error) {
    console.log(error.response.data.errMsg);
  }
};

export const httpPutActivePost = (id) => {
  try {
    const res = request.put(`/posts/active/${id}`);
    return res;
  } catch (error) {
    console.log(error.response.data.errMsg);
  }
};
export const httpPutHidePost = (id) => {
  try {
    const res = request.put(`/posts/hide/${id}`);
    return res;
  } catch (error) {
    console.log(error.response.data.errMsg);
  }
};
export const httpSearchByName = (keyword) => {
  try {
    const res = request.get(`/posts/search/${keyword}`);
    return res;
  } catch (error) {
    console.log(error.response.data.errMsg);
  }
};
export const httpGetPostsSaved = () => {
  try {
    const res = request.get('/users/getPostsSaved');
    return res;
  } catch (error) {
    console.log(error.response.data);
  }
};
export const httpGetFollowing = (id) => {
  try {
    const res = request.get(`/getFollowing/${id}`);
    return res;
  } catch (error) {
    console.log(error.response.data);
  }
};