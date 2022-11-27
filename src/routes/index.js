import Home from '~/pages/Home';
import PostDetail from '~/pages/PostDetail';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

//LAYOUT
import BlankLayout from '~/layouts/User/BlankLayout';
import AdminLayout from '~/layouts/Admin/AdminLayout';
//USER
import AddPost from '~/pages/AddPost';
import Following from '~/pages/Following';
import PostsSaved from '~/pages/PostsSaved';
import ManagePosts from '~/pages/ManagePosts';

//ADMIN
import Dashboard from '~/pages/Admin/Dashboard';

export const publicRoute = [
  {
    path: '/',
    component: Home,
  },
  {
    path: 'auth',
    component: Login,
    layout: BlankLayout,
  },
  {
    path: 'register',
    component: Register,
    layout: BlankLayout,
  },

  {
    path: 'posts/:id',
    component: PostDetail,
  },
];

export const userRoute = [
  {
    path: 'upload',
    component: AddPost,
  },
  {
    path: 'following',
    component: Following,
  },
  {
    path: 'postsSaved',
    component: PostsSaved,
  },
  {
    path: 'managePosts',
    component: ManagePosts,
  },
];
export const adminRoute = [
  {
    path: 'admin',
    component: Dashboard,
    layout: AdminLayout,
  },
];
