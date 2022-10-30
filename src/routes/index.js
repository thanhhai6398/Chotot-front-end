import Home from '~/pages/Home'
import ProductDetail from '~/pages/ProductDetail'
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import BlankLayout from '~/layouts/User/BlankLayout';
import AddPost from '~/pages/AddPost';

export const publicRoute = [
    {
        path: '',
        component: Home
    },
    {
        path: 'auth',
        component: Login,
        layout: BlankLayout
    },
    {
        path: 'register',
        component: Register,
        layout: BlankLayout
    },
    {
        path: 'addPost',
        component: AddPost
    },
    {
        path: 'products/:id',
        component: ProductDetail
    }
];
export const privateRoute = [
    {
        path: 'admin/dashboard',
        component: '',
    },
];