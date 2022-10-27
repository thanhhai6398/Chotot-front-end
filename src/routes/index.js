import { Fragment } from 'react';
import Home from '~/pages/Home'
import Menu from '~/pages/Menu'
import ProductDetail from '~/pages/ProductDetail'
import Login from '~/pages/Login';
import Register from '~/pages/Register';

export const publicRoute = [
    {
        path: '',
        component: Home
    },
    {
        path: 'auth',
        component: Login,
        layout: Fragment
    },
    {
        path: 'register',
        component: Register,
        layout: Fragment
    },
    {
        path: 'menu',
        component: Menu
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
    }
];