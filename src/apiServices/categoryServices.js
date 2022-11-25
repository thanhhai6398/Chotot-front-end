import * as request from '~/utils/request';

export const httpGetAllCategories = async () => {
    try {
        const res = await request.get('/categories');
        return res.data;
    } catch (error) {
        console.error(error.message);
    }
}