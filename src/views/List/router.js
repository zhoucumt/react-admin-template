import loadable from 'react-loadable';
import Loading from '../../components/Loading';

export const List = loadable({
    loader: () => import('./index'),
    loading: Loading
});

const routes = [
    {
        path: '/list',
        component: List
    }
];

export default routes;
