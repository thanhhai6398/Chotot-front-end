import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:5000/',
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export const post = async (path, paload) => {

}

export default request;