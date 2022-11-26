import Home from '~/pages/Home';
import PostDetail from '~/pages/PostDetail';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import BlankLayout from '~/layouts/User/BlankLayout';
import AddPost from '~/pages/AddPost';
import Following from '~/pages/Following';
import PostsSaved from '~/pages/PostsSaved';
import ManagePosts from '~/pages/ManagePosts';

export const publicRoute = [
  {
    path: '',
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
    path: 'upload',
    component: AddPost,
  },
  {
    path: 'posts/:id',
    component: PostDetail,
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
export const privateRoute = [
  {
    path: 'admin/dashboard',
    component: '',
  },
];
