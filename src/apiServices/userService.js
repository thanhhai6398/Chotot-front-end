import * as request from '~/utils/request';

export const httpGetUserById = (id) => {
    try {
      const res = request.get(`/users/${id}`);
      return res;
    } catch (error) {
      console.log(error.response.data);
    }
  };


  export const httpPutUserById = (id) => {
    try {
      const res = request.get(`/users/${id}`);
      return res;
    } catch (error) {
      console.log(error.response.data);
    }
  };