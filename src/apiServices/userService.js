import * as request from "~/utils/request";
import axios from "axios";
export const httpGetUserById = (id) => {
    try {
        const res = request.get(`/users/${id}`);
        return res;
    } catch (error) {
        console.log(error.response.data);
    }
};

export const httpPutUserById = (id,username,phone,address) => {
    const data ={username,phone,address};
    try {
        // return axios
        // .put(`http://localhost:5000/users/${id}`, data)
        // .then((response) => {
        //     return response.data;
        // });
        console.log('CALL API');
        const res = request.put(`/users/${id}`, data);
        return res;
    } catch (error) {
        console.log(error.response.data.errMsg);
    }
};
