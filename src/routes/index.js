import Home from '~/pages/Home'
import Menu from '~/pages/Menu'
import ProductDetail from '~/pages/ProductDetail'

export const publicRoute = [
    {
        path: '/',
        component: Home
    },
    {
        path: 'menu',
        component: Menu
    },
    {
        path: 'products/:id',
        component: ProductDetail
    }
]