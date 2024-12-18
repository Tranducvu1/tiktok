import Home from '~/pages/home';
import Following from '~/pages/following';
import Profile from '~/pages/profile';
import Upload from '~/pages/upload';
import { HeaderOnly } from '../../components/Layout';
import Search from '~/pages/search';
//public routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
