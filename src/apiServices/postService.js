import * as request from '~/utils/request';

export const httpGetPostById = async (id) => {
  try {
    const res = request.get(`/posts/${id}`);
    return res.data;
  } catch (error) {
    console.log(error.data);
  }
};
export const httpAddPost = async (payload) => {
  try {
    // console.log('PAYLOAD: ', payload);
    // console.log('JSON: ', JSON.stringify(payload));
    const res = request.post('/posts/upload', payload);
    return res.data;
  } catch (error) {
    console.log(error.data);
  }
};
